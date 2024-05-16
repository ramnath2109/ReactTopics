import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Composingpage from '../Pages/Composingpage';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Composingpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
