// ChildComponent.js
import React from "react";
import img from "../../../src/Assests/1.png";
import img2 from "../../../src/Assests/2.png";
import './Composingstyle.css'

const ChildComponent = () => {
  const handleClick = () => {
    alert("Message passed!");
    // You can replace `alert` with any other action you want to perform
  };

  return (
    <div className="container">
      <h2>
        In React, composing components means building larger, more complex UIs
        by combining smaller, reusable components. This approach promotes code
        reusability, maintainability, and separation of concerns. Let's break it
        down with some code: jsx
      </h2>
      <h1>ParentComponent</h1>
      <img src={img} alt="" /><h1>ChildComponent</h1>
      <img src={img2} alt="" />
      <h3>
        In this example, we have two components: ParentComponent and
        ChildComponent. The ParentComponent is composed of the ChildComponent.
      </h3>
      <h1>Here's how it works:</h1>
      <ul>
        <h2>
        <li>
          In ParentComponent.js, we import ChildComponent and render it within
          the ParentComponent JSX.
        </li>
        <li>
          When ParentComponent is rendered, it will include all the JSX from
          both ParentComponent and ChildComponent, effectively composing them
          together.
        </li>
        <li>
          Each component remains independent and can be reused elsewhere in the
          application.
        </li>
        </h2>
      </ul>
      <div>
        <h2>Child Component</h2>
        <p>This is a child component.</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

export default ChildComponent;
