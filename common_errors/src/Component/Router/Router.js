import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ContactFormPage from '../Pages/ContactFormPage'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactFormPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
