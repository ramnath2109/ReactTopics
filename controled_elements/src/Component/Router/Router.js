import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Controledinputpage from '../Pages/Controledinputpage'
import UncontrolledInput from '../Controled_element/UncontroledInput'
import './Router.css'

const Router = () => {
  return (
    <div className='container'>
        <BrowserRouter>
        
        <ul>
          <li>
            <Link to='/'>Controlled Input</Link>
          </li>
          <li>
            <Link to='/uncontroledinput'>Uncontrolled Input</Link>
          </li>
        </ul>
        <Routes>
            <Route path='/' element={<Controledinputpage/>}/>
            <Route path='/uncontroledinput' element={<UncontrolledInput/>} />
        </Routes>
        </BrowserRouter>
        <hr></hr>
    </div>
  )
}

export default Router
