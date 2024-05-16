import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Handlepage from '../Pages/Handlepage';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Handlepage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
