import './App.css';
import Datatable from './datatable';
import data from './data';
function App() {
  let fields = ['name']
  return (
    <div className="App">
      <Datatable options={fields} data={data}/>
    </div>
  );
}

export default App;
