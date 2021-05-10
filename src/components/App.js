import React from 'react'
import Navbar from './Bootstrap/Navbar'

const App = () => {
  return (
    <div className="App">
       <Navbar className="Header" dark={true}>Weather App</Navbar>
    </div>
  );
};

export default App;