import React, { useState } from "react";
import './Style.css'
const withAuthentication = (Component) => {
  const WrappedComponent = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthentication = () => {
      // Simulate authentication process, for demonstration purposes
      const randomNumber = Math.random();
      const authenticationSuccess = randomNumber > 0.5; // 50% chance of success
      setIsAuthenticated(authenticationSuccess);
    };

    return (
      <div className="container">
        
        <div className="con2">
        <h1>Higher Order Component</h1>
        <hr></hr>
      <h2>Higher-Order Component (HOC) Breakdown:</h2>
      <ul>
        <li>File Structure:
          <ul>
            <li>SecretComponent.js: Contains the component that displays secret content.</li>
            <li>withAuthentication.js: Defines the HOC that adds authentication logic.</li>
            <li>App.js: Uses the withAuthentication HOC to wrap the SecretComponent.</li>
          </ul>
        </li>
        <li>SecretComponent.js:</li>
        <ul>
          <li>Defines the SecretComponent functional component.</li>
          <li>Takes a prop isAuthenticated to determine whether to display secret content.</li>
          <li>Renders conditionally based on the isAuthenticated prop:
            <ul>
              <li>If true, displays a message saying "This is a secret component!"</li>
              <li>If false, displays a message indicating the user is not authenticated.</li>
            </ul>
          </li>
        </ul>
        <li>withAuthentication.js:
          <ul>
            <li>Defines the withAuthentication HOC as a function that takes a component (Component) as an argument.</li>
            <li>isAuthenticated: A boolean state variable initially set to false.</li>
            <li>Defines a function handleAuthentication to simulate the authentication process:</li>
            <li>Generates a random number and sets isAuthenticated based on its value (demonstration, replace with actual authentication logic).</li>
            <li>If true, renders the Component (passed as an argument) with the prop isAuthenticated set to true.</li>
            <li>If false, displays a message indicating authentication failure.</li>
          </ul>
        </li>
      </ul>
      <h2>How the HOC Works:</h2>
      <ol>
        <li>In App.js, withAuthentication is used to wrap SecretComponent. This creates a new component (WrappedSecretComponent).</li>
        <li>WrappedSecretComponent manages its own authentication state.</li>
        <li>When the "Authenticate" button is clicked in WrappedSecretComponent, the handleAuthentication function is called.</li>
        <li>The handleAuthentication function simulates authentication and updates the isAuthenticated state.</li>
        <li>Based on the isAuthenticated state, WrappedSecretComponent conditionally renders either SecretComponent with isAuthenticated set to true (if authenticated) or a message indicating failed authentication.</li>
      </ol>
        <button  onClick={handleAuthentication}>
          Authenticate
        </button>
        {isAuthenticated ? (
          <Component isAuthenticated={true} />
        ) : (
          <p style={{textAlign:"center", fontSize:"25px",  fontWeight:"bold"}}>Authentication failed. Please try again.</p>
        )}
        </div>
        <hr></hr>
      </div>
    );
  };

  return WrappedComponent;
};

export default withAuthentication;
