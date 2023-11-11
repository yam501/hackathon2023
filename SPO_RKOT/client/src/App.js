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


  }



  return (
    <div className="App">
      <Header handleFile={handleFile} />
      {openTable && <InformPanel openTable={open} />}
      <Table openTable={open} show={openTable} dataTable={dataTable} />


    </div>
  );
}

export default observer(App) ;