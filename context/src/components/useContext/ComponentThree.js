import React, { useContext} from 'react';
import { myContext } from './index.js';
import '../styles.css'

const ComponentThree = () => {
    const { name} = useContext(myContext);
  

    return (
        <div>
            <h2>Context used to Component three </h2>
            <h1>Current Name: {name}</h1>
            </div>
    )
}

export default ComponentThree;
