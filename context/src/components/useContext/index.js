// index.js
import React, { createContext, useState } from 'react';
import ComponentOne from './ComponentOne';
import image from '../../assests/1.png'
import image1 from '../../assests/2.png'
import image2 from '../../assests/3.png'

export const myContext = createContext(null);

const Index = () => {
    const [name] = useState("Welcome to React js");


    return (
        <>
        <h1>UseContext</h1>
        <hr></hr>
        <h2>1. index.js</h2>
            <img src={image} alt=''/><br/>
            <img src={image1} alt=""/>
            <ul>
                <li>This file serves as the entry point of your application.</li>
                <li>It creates a context called myContext using createContext.</li>
                <li>Inside the Index component, it initializes a state variable name using useState.</li>
                <li>It provides the name value to the context using the myContext.Provider.</li>
                <li>It renders ComponentOne.</li>
            </ul>
            <h2>2. ComponentOne.js</h2>
            <ul>
                <li>This component consumes the name value from the context using useContext.</li>
                <li>It renders the name value and ComponentTwo.</li>
                
            </ul>
            <h2>3. ComponentTwo.js</h2>
            <ul>
                <li>This component is a simple component that renders ComponentThree.</li>
            </ul>  
        <h2>4. ComponentThree.js</h2>         
        <img src={image2} alt=''/> 
            <ul>
                <li>This component consumes the name value from the context using useContext.</li>
                <li>It renders the name value.</li>
            </ul>
        <h2>How it works:</h2>  
            <ol>
                <li>When the application starts, index.js is rendered first.</li>
                <li>Inside index.js, the Index component is rendered.</li>
                <li>The Index component provides the name value to the myContext.Provider.</li>
                <li>ComponentOne is rendered and it consumes the name value from the context.</li>
                <li>ComponentOne renders the name value and ComponentTwo.</li>
                <li>ComponentTwo is rendered and it renders ComponentThree.</li>
                <li>ComponentThree consumes the name value from the context and renders it.</li>
            </ol>  
            <h1>Sample OutPut</h1>
            <hr></hr>
            <h2>Send this data from Componentone(Provider)</h2>
            <myContext.Provider value={{ name}}>
                <div>
                    <ComponentOne />
                </div>
              
            </myContext.Provider>
        </>
    )
}

export default Index;
