import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Bindingpage from '../pages/Bindingpage';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Bindingpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
