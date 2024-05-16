import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Condipage from '../Pages/Condipage';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Condipage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
