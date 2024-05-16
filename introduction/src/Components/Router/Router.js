import React from 'react';
import {BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Compopage from '../pages/Compopage';
const Router = () => {
  return (
    <div>
       
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Compopage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
