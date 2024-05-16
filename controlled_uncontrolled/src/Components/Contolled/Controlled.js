import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../src/Assets/1.png";
import img1 from "../../../src/Assets/2.png";
import "./Controlledstyle.css";

const Controlled = () => {
  const [value, setValue] = useState("");
  const [showControlled, setShowControlled] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const toggleView = () => {
    setShowControlled(!showControlled);
  };

  return (
    <div className="containers">
      <div className="samllcontainer">
        <h1>Controlled Components:</h1>
        {showControlled ? (
          <>
            <h3>
              Controlled components are components whose value is controlled by
              React. This means that the component's value is stored in the
              component's state and is updated through props passed from its
              parent component.
            </h3>
            <h3>
              These components typically receive their current value and an
              onChange handler from their parent component. When the value
              changes, the onChange handler updates the state in the parent
              component, which in turn updates the controlled component.
            </h3>
            <h3>
              Controlled components are preferred when you need to have more
              control over the component's behavior or when you need to validate
              or manipulate the input before updating the state.
            </h3>
            <h4>Example of a controlled component:</h4>
            <img src={img} alt="" />
          </>
        ) : null}
        <br />
        <button onClick={toggleView}>
          {showControlled ? "Hide Controlled" : "Show Controlled"}
        </button>
      </div>
      <div className="unc">
        <h1>Uncontrolled Components:</h1>
        {!showControlled ? (
          <>
            <h3>
              Uncontrolled components are components whose value is managed by
              the DOM itself. React doesn't control the value of these
              components directly.
            </h3>
            <h3>
              These components typically use refs to access the DOM element
              directly and obtain the value from the DOM when needed.
            </h3>
            <h3>
              Uncontrolled components are useful when you want to integrate with
              third-party libraries or when you want to handle form submissions
              in a more traditional HTML way.
            </h3>
            <h4>Example of an uncontrolled component:</h4>
            <img src={img1} alt="" />
          </>
        ) : null}
        <br />
        <button onClick={toggleView}>
          {showControlled ? "Show Uncontrolled" : "Hide Uncontrolled"}
        </button>
      </div>
      <input type="text" value={value} onChange={handleChange} />

      <Link to="/uc">
        <button>Go to Uncontrolled Page</button>
      </Link>
    </div>
  );
};

export default Controlled;
