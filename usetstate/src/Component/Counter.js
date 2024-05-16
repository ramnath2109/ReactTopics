import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
        <h1>useState</h1>
        <hr></hr>
        <h2>Introduction</h2>
        <h3>useState is a hook in React that allows functional components to manage local state. It provides a way to declare state variables in functional components, 
            allowing the component to re-render when the state changes.</h3>
        <h2>Example Program:</h2>   
        <h3>We import useState hook from React.</h3>
        <h3>Inside the Counter functional component, we use useState(0) to initialize a state variable named count with an initial value of 0. useState(0) returns an array where the first element 
            is the current state value (count) and the second element is a function (setCount) to update the state.</h3>
        <h3>We display the current value of count in a paragraph (`
            Count: count`).</h3>
        <h3>We have two buttons:</h3>
        <h3>The first button increments the count when clicked by calling setCount(count ).</h3>
        <h3>The second button resets the count to 0 when clicked by calling setCount(0).</h3>
        <h1>Sample OutPut</h1>
        <hr></hr>
      <p className="counter-display">Count: {count}</p>
      <div className="counter-buttons">
        <button className="counter-button" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="counter-button" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;

