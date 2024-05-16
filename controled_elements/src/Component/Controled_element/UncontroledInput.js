import React, { useRef } from 'react';

function UncontrolledInput() {
  // Create a ref to hold the input element
  const inputRef = useRef(null);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Access the current value of the input element using the ref
    alert(`You typed: ${inputRef.current.value}`);
  };

  return (
    <div>
      {/* Form with an uncontrolled input element */}
      <form onSubmit={handleSubmit}>
        {/* Input element with ref attribute */}
        <input 
          type="text" 
          ref={inputRef} 
          placeholder="Type something..." 
        />
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledInput;
