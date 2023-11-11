import './app.css';
import Header from './components/Header/Header';
import InformPanel from './components/InformPanel/InformPanel';
import Table from './components/Table/Table';

var XLSX = require("xlsx");



function App() {


  const handleFile = async e => {
    const file = e.target.files[0]

    const data = await file.arrayBuffer();
    const workbook = XLSX.readFile(data, { sheetRows: 50 })

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: ""
    })

    console.log(jsonData)
  }



  return (
    <div className="App">
      <Header />
      <InformPanel />
      <Table />
      <>
        <input type='file' onChange={e => handleFile(e)} />

      </>

    </div>
  );
}

export default App;








// var XLSX = require("xlsx");

// function App() {

//   const handleFile = async e => {
//     const file = e.target.files[0]

//     const data = await file.arrayBuffer();
//     const workbook = XLSX.readFile(data, {sheetRows: 50})

//     const worksheet = workbook.Sheets[workbook.SheetNames[0]]
//     const jsonData = XLSX.utils.sheet_to_json(worksheet, {
//       header: 1,
//       defval: ""
//     })

//     console.log(jsonData)
//   }


//   return (
//     <div className="App">
//       <input type='file' onChange={e => handleFile(e)} />
//     </div>