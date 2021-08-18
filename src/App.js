import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }

  }
  return (
  <>
{/* <Navbar title="TextApp by Himanshu Chandola" aboutText="About"/> */}
<Navbar title="TextApp by Himanshu Chandola" mode={mode} toggle={toggleMode} />
<div className="container my-3">
<TextForm heading="Enter The Text to analyze below"/>
{/* <About/> */}
</div>

  </>
  );
}

export default App;
