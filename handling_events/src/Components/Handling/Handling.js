import React from "react";
import img from "../../../src/Assets/1.png";
import './Handlingstyle.css'

function Handling() {
  return (
    <div className="container">
      <div className="texts">
        <h1> HANDLING EVENTS</h1>
        <h3>
          In React, handling events involves creating functions that will be
          triggered in response to user interactions, such as clicking a button
          or typing in an input field. These event handlers are typically
          defined as methods within a React component class and are assigned to
          specific elements in the JSX markup.
        </h3>
        <h4>Here's a simple explanation with sample example code:</h4>
        <img src={img} alt="" />
        <h4>In this example:</h4>
        <ul>
          <h3>
            <li>We have a MyComponent class that extends Component.</li>
            <li>
              In the constructor, we initialize the component's state with a
              count property set to 0.
            </li>
            <li>
              We define a method handleClick that increments the count state
              when the button is clicked.
            </li>
            <li>
              In the render method, we display the current count value and a
              button.
            </li>
            <li>
              The button's onClick attribute is assigned the handleClick method,
              so when the button is clicked, handleClick is called, updating the
              count in the component's state.
            </li>
          </h3>
        </ul>

        <h4>
          This is a basic example, but event handling in React can be used for a
          wide range of user interactions, from simple button clicks to complex
          forms and user interfaces.
        </h4>
        <div className="btn">
            <hr></hr>
            <h1>Sample Output</h1>
        <h1>Click Counter</h1>
        <button onClick={() => alert("Button clicked!")}>Click Me</button>
        <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default Handling;
