import './app.css';
import Header from './components/Header/Header';
import InformPanel from './components/InformPanel/InformPanel';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <InformPanel/>
      <Table/>
    </div>
  );
}

export default App;
