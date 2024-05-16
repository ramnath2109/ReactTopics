import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Funcpage from '../Pages/Funcpage';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Funcpage/>}> </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default Router;
