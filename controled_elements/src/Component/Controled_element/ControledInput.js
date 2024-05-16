// import { useState } from "react"
import React, {useState} from 'react'

const ControledInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value); // Update the inputValue state with the new value
  };

  return (
    <div className='container'>
        
      {/* Input element with value set to state and onChange event handler */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something..." 
      />
      {/* Display the current input value */}
      <h1>You typed: {inputValue}</h1>
    </div>
  );
}

export default ControledInput
