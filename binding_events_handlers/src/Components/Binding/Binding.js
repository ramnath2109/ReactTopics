import React, { useState } from "react";
import img from "../../../src/Assets/1.png";
import './Bindingstyle.css'
const Binding = () => {
  const [count, setCount] = useState(0);

  // Method 1: Using arrow function to bind event handler
  const handleClick1 = () => {
    setCount(count + 1);
  };

  // Method 2: Using bind() method to bind event handler
  const handleClick2 = function () {
    setCount(count + 1);
  }.bind(this);

  return (
    <div className="container">
      <div>
        <h1 className="title">BINDING EVENTS HANDLERS</h1>
        <h3 className="description">
          In React, you can bind event handlers in function components using
          arrow functions or the bind() method. Here's an example of binding
          event handlers in a function component in a single page:
        </h3>
        <img src={img} alt=""  className="image"/>
        <h4>In the above example:</h4>
        <ul>
            <h3>
          <li>
            handleClick1 uses an arrow function to bind the event handler. Arrow
            functions automatically bind this to the context in which they're
            defined.
          </li>
          <li>
            handleClick2 uses the bind() method to bind the event handler
            explicitly. This ensures that this inside the function refers to the
            component instance.
          </li>
          </h3>
        </ul>
        <h4 className="description">
          Both methods achieve the same result, but using arrow functions is
          more concise and widely used in modern React code.
        </h4>
        <p className="count">Count: {count}</p>
        {/* Binding event handler using arrow function */}
        <button className='button'onClick={handleClick1}>Increment Count (Arrow Function)</button>
        {/* Binding event handler using bind() method */}
        <button className='button' onClick={handleClick2}>Increment Count (bind() Method)</button>
      </div>
    </div>
  );
};

export default Binding;
