
import './App.css';
import Front from './components/Front';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import * as React from "react";
import Error from './components/Error';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';

function App() {

  const[ mode , setMode]=useState('light');
  const[ alert , setAlert]=useState(null);
  
  const showAlert=(message , type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }


  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success');
    }

  }
  
  return (
    <>
      
      <Navbar title="VIPS-TC" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front/>}  errorElement={<Error/>}/>
          <Route path="/About" element={<About mode={mode} toggleMode={toggleMode}/>} errorElement={<Error/>} />
          <Route path="/ContactUs" element={<ContactUs mode={mode} toggleMode={toggleMode}/>}  errorElement={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


