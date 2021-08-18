import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('dark');
  return (
  <>
{/* <Navbar title="TextApp by Himanshu Chandola" aboutText="About"/> */}
<Navbar title="TextApp" mode={mode} />
<div className="container my-3">
<TextForm heading="Enter The Text to analyze below"/>
{/* <About/> */}
</div>

  </>
  );
}

export default App;
