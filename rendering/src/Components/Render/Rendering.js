import React, { useState } from "react";
import img1 from "../../../src/Assets/1.png";
import img2 from "../../../src/Assets/2.png";
import img3 from "../../../src/Assets/3.png";
import './Renderingstyle.css'

function Rendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login status
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>CONDITIONAL RENDERING</h1>
      </div>
      <h3>
        Conditional rendering in React refers to the practice of rendering
        different components or UI elements based on certain conditions. This
        allows you to control what gets displayed to the user dynamically, based
        on various factors such as user input, state changes, or props.
      </h3>
      <h4>
        Here's an explanation along with a sample code demonstrating conditional
        rendering in functional components:
      </h4>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <h4>In this example:</h4>
      <h4>
        2.We have a parent functional component App which maintains the state of
        whether the user is logged in or not using the isLoggedIn state
        variable.
      </h4>
      <h4>
        2.Based on the isLoggedIn state, we conditionally render either the
        UserDashboard component or the LoginForm component.
      </h4>
      <h4>
        3.When the user clicks the "Logout" button in the UserDashboard
        component, it calls the logout function passed as a prop, which toggles
        the isLoggedIn state, thus switching back to the LoginForm.
      </h4>
      <h4>
        4.The LoginForm component has a form for the user to input their
        credentials. When submitted, it calls the login function passed as a
        prop, which simulates a login action and sets the isLoggedIn state to
        true, switching to the UserDashboard.
      </h4>
      {/* Conditional rendering based on isLoggedIn state */}
      {isLoggedIn ? (
        <UserDashboard logout={toggleLogin} />
      ) : (
        <LoginForm login={toggleLogin} />
      )}
    </div>
  );
}

// Component for the user dashboard
function UserDashboard({ logout }) {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// Component for the login form
function LoginForm({ login }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating login, set isLoggedIn to true
    login();
  };

  return (
    <div>
      <hr></hr>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <hr></hr>
    </div>
  );
}

export default Rendering;
