import React from 'react';
import {BrowserRouter ,  Routes , Route} from 'react-router-dom';
import Passingpage from '../Pages/Passingpage';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Passingpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
