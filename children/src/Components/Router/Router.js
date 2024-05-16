import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Childpage from '../Pages/Childpage';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Childpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
