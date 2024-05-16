import React, { useState } from "react";
import img from "../../../src/Assets/1.png";
import img1 from "../../../src/Assets/2.png";
import './Funcstyle.css'
const Func = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="smallcontainer">
        <h1>FUNCTIONAL</h1>
        <hr></hr>
        <h2>
          Functional components in React are JavaScript functions that are used
          to define UI elements. They are also sometimes referred to as
          stateless components or functional stateless components.{" "}
        </h2>
        <h2>
          Functional components are simple and straightforward compared to class
          components and are used when the component doesn't need to manage its
          own state or lifecycle methods.
        </h2>
        <br></br>
        <h3>Here's a simple example of a functional component in React:</h3>
      </div>
      <h1>Hello, I'm a functional component!</h1>
      <img src={img} alt="" />
      <h1>In this example:</h1>
      <ul>
        <li>
          We import React from the 'react' library because JSX (the syntax used
          in React) gets transpiled to React.createElement() calls.
        </li>
        <li>
          We define a functional component called MyComponent using an arrow
          function syntax. The component returns JSX, describing the UI that it
          represents.
        </li>
        <li>
          Finally, we export the component using export default so that it can
          be imported and used in other parts of our application.
        </li>
      </ul>
      <h3>
        Functional components are primarily used for presentational purposes,
        i.e., rendering UI based on props passed to them. They don't have their
        own state or lifecycle methods like class components do. However, with
        the introduction of React Hooks in React 16.8, functional components
        gained the ability to use state and lifecycle features through hooks
        like useState, useEffect, etc.
      </h3>
      <h2>
        Here's an example of a functional component that uses state with the
        useState hook:
      </h2>
      <img src={img1} alt="" />
      <br></br>
      <h3>
        In this example, useState hook is used to add state to the functional
        component Counter. It initializes count state to 0 and provides a
        function setCount to update the state. When the button is clicked,
        increment function is called, updating the count state and triggering a
        re-render to reflect the updated state.
      </h3>
      <div className="output">
        <h1>Sample Output</h1>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Func;
