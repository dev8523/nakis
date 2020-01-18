import React from 'react';
import './App.css';
import Super from './super_props/super';
import ClassAComponent from './component_sharing/componentA';
function App() {
  return (
    <div className="App">
      {/*-Defines Super props example-*/}
      {/* <Super /> */}

      {/*-Defines passing value between components -*/}
      <ClassAComponent />

      {/*--Lifecycle example --*/}
    </div>
  );
}

export default App;
