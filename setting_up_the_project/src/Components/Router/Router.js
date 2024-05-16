import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Settingpage from '../Pages/Settingpage';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Settingpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
