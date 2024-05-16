import React from 'react';
import './App.css';
import MainComponent from './components/useContext/index.js'
import { BrowserRouter, Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <div className='context'>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
