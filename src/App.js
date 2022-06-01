import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'portfolio - Dark Mode';
      // setInterval(() => {
      //   document.title = 'portfolio is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install portfolio Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'portfolio - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title="portfolio" aboutText="About portfolio" /> */}
    {/* <Navbar/> */}
    
    <Navbar title="Portfolio" mode={mode} toggleMode={toggleMode} Contactme='Contactme' />
    <Alert alert={alert}/>
    <div className="container my-3">
      
    
    {/* /users --> Component 1
        /users/home --> Component 2 */}
        <About/>
          
          
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
         
    
    </div>
    
    </> 
    
  );
}

export default App;