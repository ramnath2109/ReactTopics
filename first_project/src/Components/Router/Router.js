import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Projectpage from '../Pages/Projectpage';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Projectpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
