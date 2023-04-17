import { useState } from 'react';
import './App.css';
import Header from './Header';
import Component1 from './Component1';


function App() {

const [activeComp, setActiveComp] =useState(<Component1/>);


  return (
    <div className="App">
      <Header setAC={setActiveComp}/>

        {activeComp}
        
    </div>
  );
}

export default App;
