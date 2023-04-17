import { useState } from 'react';
import './App.css';
import Header from './Header';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {

const [activeComp, setActiveComp] =useState('Component1');

//
const updateVisibleComponent = (componentName) => {
  setActiveComp(componentName);
};

const renderVisibleComponent = () => {
  switch (activeComp) {
    case 'Component1':
      return <Component1 setVisibleComponent={updateVisibleComponent} />;
    case 'Component2':
      return <Component2 />;
    case 'Component3':
      return <Component3 />;
    default:
      return null;
  }
};
//

  return (
    <div className="App">
      <Header component={activeComp === 'Component1' ? 'Component1' : activeComp === 'Component2' ? 'Component2' : activeComp === 'Component3' ? 'Component3' : ''} setAC={setActiveComp}/>

      <div className='absolute w-12 h-12 sm:bg-slate-100 md:bg-slate-300 lg:bg-slate-500 xl:bg-slate-700 2xl:bg-slate-900 3xl:bg-slate-300'>
        
      </div>
      {renderVisibleComponent()}
        
    </div>
  );
}

export default App;
