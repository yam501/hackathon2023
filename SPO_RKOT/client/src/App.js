import { useState } from 'react';
import './app.css';
import Header from './components/Header/Header';
import InformPanel from './components/InformPanel/InformPanel';
import Table from './components/Table/Table';

var XLSX = require("xlsx");



function App() {

  const [openTable, setOpenTable] = useState(false)
  const open = () => setOpenTable(!openTable);
  const [dataTable, setDataTable] = useState([]); 
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
      console.log(jsonData)
    }

  return (
    <div className="App">
      <Header handleFile={handleFile} />
      { openTable && <InformPanel openTable={open}/>}
      <Table openTable={open} show={openTable} />


    </div>
  );
}

export default App;