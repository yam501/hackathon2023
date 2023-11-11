import React, { useContext, useState, useEffect } from 'react';
import './app.css';
import Header from './components/Header/Header';
import InformPanel from './components/InformPanel/InformPanel';
import Table from './components/Table/Table';
import { observer } from 'mobx-react-lite';

import { Context } from '.';

var XLSX = require("xlsx");



function App() {

  const { externalTable } = useContext(Context)
  const { internalTable } = useContext(Context)


  const [openTable, setOpenTable] = useState(false)
  const open = () => setOpenTable(!openTable);
  const [dataTable, setDataTable] = useState([]);


  useEffect(() => {
    getDataTables()
  }, [])
  

  const getDataTables = async () =>{
    await externalTable.fetchAll()
  }
  
  const handleFile = async e => {
    const file = e.target.files[0]
    if (!file.name.includes('.xlsx') || !file.name.includes('.xls')) return console.log('выбран не тот тип файлов')
    const data = await file.arrayBuffer();
    const workbook = XLSX.readFile(data, { sheetRows: 50 })

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: ""
    })
    setDataTable(jsonData)
    await createExternalTable(jsonData)
    console.log(jsonData)
  }

  const createExternalTable = async (jsonData) => {
    let district = jsonData[7][0]?.substring(21)
    let place = jsonData[13][0]?.substring(27)
    let time = jsonData[12][0]?.substring(30)
    let exTab = await externalTable.create(district, place, time)
    
    await createInternalTable(jsonData, exTab.data.id)
  }


  const createInternalTable = async (jsonData, exId) => {
    const externalTableId = exId
    const lenOfCompany = jsonData[17].length - 2
    for(let i = 2; i<=lenOfCompany; i++ ){
      let companyName = jsonData[17][i]
      let voiceServiceNonAcessibility = jsonData[18][i]
      let voiceServiceCutOffRatio = jsonData[19][i]
      let speechQualityonCallbasis = jsonData[20][i]
      let negativeMOSSamplesRatio = jsonData[21][i]

      let undeliveredSMSRatio = jsonData[23][i]
      let averageSMSTime = jsonData[24][i]


      let HTTPSessionFailureRatio = jsonData[26][i]
      let HTTPULMeanUserDataRate = jsonData[27][i]
      let HTTPDLMeanUserDataRate = jsonData[28][i]
      let HTTPSessionTime = jsonData[29][i]

      let testVoiceConnectionQuantity = jsonData[31][i]
      let POLQA = jsonData[32][i]
      let negativeMOSSamplesCount = jsonData[33][i]
      let SMSQuantity = jsonData[34][i]
      let quantityConnection = jsonData[35][i]
      let quantitySessions = jsonData[36][i]

      await internalTable.create(externalTableId, companyName,

        voiceServiceNonAcessibility, voiceServiceCutOffRatio, speechQualityonCallbasis, negativeMOSSamplesRatio,
        undeliveredSMSRatio, averageSMSTime,

        HTTPSessionFailureRatio, HTTPULMeanUserDataRate, HTTPDLMeanUserDataRate, HTTPSessionTime,

        testVoiceConnectionQuantity, POLQA, negativeMOSSamplesCount, SMSQuantity, quantityConnection,
        quantitySessions)
    }

  
    console.log(lenOfCompany)
  }

  return (
    <div className="App">
      <Header handleFile={handleFile} />
      { openTable && <InformPanel openTable={open}/>}
      <Table openTable={open} show={openTable} />
      <button onClick={() => console.log(externalTable.externalTable)}> ЖМИ МЕНЯ</button>

    </div>
  );
}

export default observer(App) ;