import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//시윤
import ResumeForm from './components/ResumeForm';
import ResumeFormDetail from './components/ResumeFormDetail';
import ResumeAdd from './components/ResumeAdd';

//가영
import Camera from './components/Camera';
import OCRresult from './components/OCRresult';
import Myresume from './components/Myresume';
import Home from './components/Home';

//해솔
import Login from './Login/Login';
import Join from './Join/Join'; 
import Interest from './Interest/Interest'
import InterestDetail from './InterestDetail/InterestDetail';
import SetProfile from './SetProfile/SetProfile';
import Settings from './Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/resumeform' element={<ResumeForm />} />
        <Route path='/detail' element={<ResumeFormDetail />} />
        <Route path='/add' element={<ResumeAdd />} />

        <Route path="/camera" element={<Camera />} />
        <Route path="/result" element={<OCRresult />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myresume" element={<Myresume />} />

        <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Interest" element={<Interest />} />
          <Route path='/InterestDetail/:id' element={<InterestDetail />} />
          <Route path='/SetProfile' element={<SetProfile />} />
          <Route path='/Settings' element={<Settings />} />
          
      </Routes>
    </BrowserRouter>
  );
};

export default App;
