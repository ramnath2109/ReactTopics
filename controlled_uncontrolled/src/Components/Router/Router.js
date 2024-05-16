import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Controlledpages from '../Pages/Controlledpages';
import Uncontrolledpages from '../Pages/Uncontrolledpages';

const Router = () => {
  return (
    <div>
      <BrowserRouter>   
      <Routes>
      <Route path='/' element={<Controlledpages/>}></Route>
      <Route path='/uc' element={<Uncontrolledpages/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
