import React, { useRef } from "react";
import './Uncontrolledstyle.css'
function Uncontrolled() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Input value: " + inputRef.current.value);
  };

  return (
    <div className="container">
      <h1>Uncontrolled Components in React:</h1>
      <h1>Definition</h1>
      <h3>
        Uncontrolled components in React are form elements that manage their own
        state internally. Unlike controlled components, where React controls the
        state of the form elements, uncontrolled components handle their state
        directly through the DOM.
      </h3>
      <h1>State Handling</h1>
      <h3>
        With uncontrolled components, React doesn't control the state. Instead,
        you interact directly with the DOM using references (refs) to access the
        values of form elements.
      </h3>
      <h1>efs Usage</h1>
      <h3>
        Refs are used to get access to the DOM nodes. By attaching a ref to a
        form element, you can directly access its current value through the DOM.
      </h3>
      <h1>Pros:</h1>
      <h1>Simplicity</h1>
      <h3>
        {" "}
        Uncontrolled components can be simpler to implement, as you don't need
        to write event handlers to update the state on every change.
      </h3>
      <h1>Integration</h1>
      <h3>
        They can be more suitable for integrating React into existing
        applications that rely heavily on traditional HTML forms.
      </h3>
      <h1>Control</h1>
      <h3>
        Since React doesn't control the state, it can be harder to synchronize
        the form state with other parts of your application.
      </h3>
      <h1>Validation and Manipulation</h1>
      <h3>
        {" "}
        It might require more custom code for validation or manipulation, as the
        data is managed directly by the DOM.
      </h3>
      <div className="container">
        <h1>SAMPLE OUTPUT</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      </div>
      <h4>
        In summary, uncontrolled components provide a simpler approach for form
        management in React, but they may lack the fine-grained control and data
        management benefits of controlled components. The choice between
        controlled and uncontrolled components depends on your specific use case
        and preferences.
      </h4>
    </div>
  );
}

export default Uncontrolled;
