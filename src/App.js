import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignup/Login'; 
import Main from './Components/MainPage/Main';
import Issues from './Components/Issues/Issues';
import ReportSubmit from './Components/ReportSubmit/ReportSubmit';
import Setting from './Components/Settings/Setting';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><LoginSignup /></div>} />
        <Route path="/home" element={<div><Main /></div>} />
        <Route path="/issues" element ={<div><Issues/></div>}/>
        <Route path="/report-submit" element={<div><ReportSubmit/></div>}/>
        <Route path="/settings" element={<div><Setting/></div>}/>

      </Routes>
    </Router>
  );
}

export default App;
