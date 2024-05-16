import React from 'react'
import { useContext } from 'react'
import { myContext } from './index'
import ComponentTwo from  './ComponentTwo'

const ComponentOne = () => {
    const {name} = useContext(myContext)
  return (
    <div>
     <h1>{name}</h1>
     <ComponentTwo/>
    </div>
  )
}

export default ComponentOne
