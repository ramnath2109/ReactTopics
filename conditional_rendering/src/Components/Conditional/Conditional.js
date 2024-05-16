import React, { useState } from "react";
import img from "../../../src/Assets/1.png";
import './Conditionalstyle.css'
function Conditional() {
  // Define a state variable to track whether a condition is true or false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login button click
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout button click
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <div className="text">
        <h1>CONDITIONAL RENDERING</h1>
        <h3>
          Conditional rendering in React refers to the practice of rendering
          different components or UI elements based on certain conditions. This
          allows you to dynamically display different content depending on the
          state of your application.
        </h3>
        <br></br>
        <h3>Here's an explanation with a sample code:</h3>

        <img src={img} alt="" />
        <h3>In this example:</h3>
        <ul>
            <h3>
          <li>
            We have a isLoggedIn state variable initialized to false using the
            useState hook. This variable tracks whether the user is logged in or
            not.
          </li>
          <li>
            There are two buttons: one for logging in and one for logging out.
            When the user clicks the login button, the isLoggedIn state is set
            to true, and when they click the logout button, it's set to false.
          </li>
          <li>
            Inside the return statement, we use curly braces {} to perform
            conditional rendering. If isLoggedIn is true, we render a welcome
            message and a logout button. Otherwise, we render a login button.
          </li>
          <li>
            Depending on the value of isLoggedIn, the appropriate content is
            displayed to the user.
          </li>
          </h3>
        </ul>
        {/* Conditional rendering based on isLoggedIn state */}
        {isLoggedIn ? (
          // If isLoggedIn is true, render the welcome message and logout button
          
          <div className="title">
            <hr></hr>
            <h1>Welcome User!</h1>
            <div className="button-container">
            <button onClick={handleLogout}>Logout</button>
            <hr></hr>
            </div>
            <h3>
              Conditional rendering in React is a powerful feature that allows
              you to create dynamic and interactive user interfaces based on the
              current state of your application.
            </h3>
          </div>
        ) : (
          // If isLoggedIn is false, render the login button
          <div className="ouput">
            <hr></hr>
            <h1>Please Login</h1>
            <div className="button-container">
            <button onClick={handleLogin}>Login</button>
            <hr></hr>
            </div>
            <h3>
              Conditional rendering in React is a powerful feature that allows
              you to create dynamic and interactive user interfaces based on the
              current state of your application.
            </h3>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Conditional;
