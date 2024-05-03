import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

function App() {
   const[mode, setMode] = useState('light');   //Whether dark mode is enable or not
   const[alert, setAlert] = useState(null);   
   // showAlert is a function which help us to show the messages
   const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
   })
   setTimeout(() => {
      setAlert(null);
   }, 1500);
   }
   
   const toggleMode =()=>{
     if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark Mode has been enabled","success")
      // document.title= `Textutils - Dark mode`;
     }
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been enabled","success")
      // document.title=`Textutils - Light mode`;
      //-----To blink the title bar content used below technique ---
      // setInterval(() => {
      //   document.title=`Textutils is a amazing site`;
      // }, 2000);
      // setInterval(() => {
      //   document.title=`Install Textutils Now`;
      // }, 1500);
     }
   }
   return (
    <>
    
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* <Navbar/> */}
    <Router>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

  <div className="container my-3">
  <Switch>
    {/* Exact is helps to protect data from partial matching */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
          </Route>
  </Switch>
  </div>
  </Router>
    </>
  )
}

export default App;
