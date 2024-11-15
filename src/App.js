import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResumeForm from './components/ResumeForm';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ResumeForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
