import React, {useContext, useState, useEffect, useMemo} from 'react';
import './app.css';
import Header from './components/Header/Header';
import InformPanel from './components/InformPanel/InformPanel';
import Table from './components/Table/Table';
import {observer} from 'mobx-react-lite';

import {Context} from '.';

var XLSX = require("xlsx");


//Преобразование строки даты в тип даты для postgreSQL: 17.02.2015 -> 2015.02.17
function pgFormatDate(inputDateString) {
    // Разделение строки на компоненты даты
    const [day, month, year] = inputDateString.split('.');

    // Форматирование строки с преобразованной датой
    const formattedDate = `${year}.${month}.${day}`;

    return formattedDate;
}

//Определение кол-ва компаний
function countCompanies(dataArray) {
    let companyCount = -1; //т.к. есть непустая строка с описанием

    for (let i = 0; i < dataArray.length; i++) {
        // Проверка, что элемент не является пустой строкой
        if (dataArray[i].trim() !== '') {
            companyCount++;
        }
    }

  return companyCount;
}

const regionDictionary = {
  "ЦЕНТРАЛЬНОМ ФЕДЕРАЛЬНОМ ОКРУГЕ": "ЦФО",
  "СЕВЕРО-ЗАПАДНОМ ФЕДЕРАЛЬНОМ ОКРУГЕ": "СЗФО",
  "ЮЖНОМ ФЕДЕРАЛЬНОМ ОКРУГЕ": "ЮФО",
  "ПРИВОЛЖСКОМ ФЕДЕРАЛЬНОМ ОКРУГЕ": "ПФО",
  "УРАЛЬСКОМ ФЕДЕРАЛЬНОМ ОКРУГЕ": "УФО",
  "СИБИРСКОМ ФЕДЕРАЛЬНОМ ОКРУГЕ": "СФО",
  "ДАЛЬНЕВОСТОЧНОМ ФЕДЕРАЛЬНОМ ОКРУГЕ": "ДФО",
  "СЕВЕРО-КАВКАЗСКОМ ФЕДЕРАЛЬНОМ ОКРУГЕ": "СКФО"
};


function App() {

    const {externalTable, internalTable} = useContext(Context)


    const [openTable, setOpenTable] = useState(false)
    const open = () => setOpenTable(!openTable);


    const [externalTableList, setExternalTableList] = useState([]);

    const [federalOkr, setFederalOkr] = useState('')
    const [place, setPlace] = useState('')

    const [sortFiltr, setSortFiltr] = useState('')

    const [date, setDate] = useState('')

    const sortedExternalTable = useMemo(() => {
        if (sortFiltr == 1) return [...externalTableList].sort((a, b) => a['startDate'].localeCompare(b['startDate']))
        if (sortFiltr == 2) return [...externalTableList].sort((a, b) => b['startDate'].localeCompare(a['startDate']))
        return externalTableList
    }, [sortFiltr, place])


    const searchedExternalTable = useMemo(() => {
        return sortedExternalTable.filter(data => data.district.toLowerCase().includes(federalOkr.toLowerCase()) & data.place.toLowerCase().includes(place.toLowerCase()) &
            (data.startDate.includes(date)) || data.endDate.includes(date))
    }, [federalOkr, place, date, sortedExternalTable])



  useEffect(() => {
    getDataTables()
  }, [externalTable.externalTable.length])


  const getDataTables = async () => {
    await externalTable.fetchAll().then(res => setExternalTableList(externalTable.externalTable))

  }

  //Загрузка excel файла и разбиение его на json массивы
  const handleFile = async e => {
    const lenOfFiles = e.target.files.length
    for (let i = 0; i < lenOfFiles; i++) {
      const file = e.target.files[i]
      if (!file.name.includes('.xlsx') || !file.name.includes('.xls')) return console.log('выбран не тот тип файлов')
      const data = await file.arrayBuffer();
      const workbook = XLSX.readFile(data, { sheetRows: 50 })

            const worksheet = workbook.Sheets[workbook.SheetNames[0]]
            const jsonData = XLSX.utils.sheet_to_json(worksheet, {
                header: 1,
                defval: ""
            })
            await createExternalTable(jsonData)
            console.log(jsonData)
        }

    }

  //Создание внешней таблицы
  const createExternalTable = async (jsonData) => {


    let district = ((regionDictionary[jsonData[7][0]?.substring(21)]) != null) ? regionDictionary[jsonData[7][0]?.substring(21)] : jsonData[7][0]?.substring(21)

    let place = jsonData[13][0]?.substring(27)
    let startDate = pgFormatDate(jsonData[12][0]?.substring(30, 40))
    let endDate = pgFormatDate(jsonData[12][0]?.substring(44, 54))

        let exTab = await externalTable.create(district, place, startDate, endDate)

        await createInternalTable(jsonData, exTab.data.id)
    }


  //Создание внутренней таблицы
  // Ввод даннхы в бд из таблицы, i - кол-во компаний
  const createInternalTable = async (jsonData, exId) => {
    const externalTableId = exId
    const quantOfCompanies = countCompanies(jsonData[17])  //Определениен количества компаний
    for (let i = 2; i <= quantOfCompanies + 1; i++) { //От 2 т.к. первые два столба - статичные описания, значения начинаются с 3-го

            //Статичные индексы, т.к. данные в excel находятся в одних и тех же строках
            //Отличаются лишь столбцы - сами компании, по ним мы и идем с помощью fori

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
    }

    return (
        <div>
            <Header handleFile={handleFile}/>
            <div className='mt-2 container search_panel_wrapper'>
                <h1 className='mt-5 d-flex align-items-center justify-content-center'>
                    Поисковая панель
                </h1>
                <div className='container search_panel_content'>
                    <label className='search_panel_label' for='okr'> Федеральный округ</label>
                    <input className='search_panel_input' id='okr' value={federalOkr}
                           onChange={e => setFederalOkr(e.target.value)}></input>
                    <label className='search_panel_label' for='plc'> Город </label>
                    <input className='search_panel_input' id='plc' value={place}
                           onChange={e => setPlace(e.target.value)}></input>
                    <label className='search_panel_label' for='sd'> Дата 1 </label>
                    <input className='search_panel_input' id='sd' value={date}
                           onChange={e => setDate(e.target.value)}></input>
                    <select className='search_panel_select' onChange={e => setSortFiltr(e.target.value)}>
                        <option value={''}>Выберите тип сортировки</option>
                        <option value={1}>По возрастанию</option>
                        <option value={2}>По убыванию</option>
                    </select>
                </div>
            </div>
            <Table openTable={open} show={openTable}
                   externalTableList={searchedExternalTable.length > 0 ? searchedExternalTable : externalTableList}/>
            <button onClick={() => console.log(place, federalOkr)}> ЖМИ МЕНЯ</button>

        </div>
    );
}

export default observer(App);