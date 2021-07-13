import './App.css';
import Datatable from './datatable';
import data from './data';
import OptionButton from './datatable/optionButton';
import React from 'react';
function App() {
  let options = {
    actions:[OptionButton],
    exclude:['address','company'],
    showOption:true
  }
  const handleRowOnClick = (e,row)=>{
    console.log(e,row)
  }
  return (
    <div className="App">
      <Datatable
      options={options}
      rowOnClick={handleRowOnClick}
      data={data}/>
    </div>
  );
}

export default App;
