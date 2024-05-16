import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Renderpage from '../Pages/Renderpage';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Renderpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
