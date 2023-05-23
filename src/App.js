import { useState } from 'react';
import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
import Alert from './components/alert';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('white');// wether darkMode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  function toggleMode() {
    const toggle__dot = document.querySelector('.toggle__dot');
    const body = document.querySelector('body');
    const Mode = document.querySelector(".mode");
    if (mode === 'white') {
      setMode('black')
      showAlert("Dark Mode Enabled", "Success")
      Mode.innerHTML = "Light Mode"
      toggle__dot.style.left = '24px'
      toggle__dot.style.transition = ".1s"
      toggle__dot.style.backgroundColor = 'white'
      body.style.backgroundColor = 'black'
      body.style.color = 'white'
    }
    else {
      setMode('white')
      showAlert("Light Mode Enabled", "Success")
      Mode.innerHTML = "Dark Mode"
      toggle__dot.style.left = '0px'
      toggle__dot.style.transition = ".1s"
      toggle__dot.style.backgroundColor = 'black'
      body.style.backgroundColor = 'white'
      body.style.color = 'black'

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert} />} />
          <Route path='/about' element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
