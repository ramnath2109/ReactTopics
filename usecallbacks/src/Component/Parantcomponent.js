import React, { useState, useCallback } from 'react';
import './Style.css'

const ChildComponent = ({ handleClick }) => {
  console.log('ChildComponent rendering');
  return (
    <button onClick={handleClick}>Click Me</button>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
  }, [count]); // Dependency array containing 'count'

  console.log('ParentComponent rendering');

  return (
    <div className='container1'>
        <div>
        <p>Count: {count}</p>
      <ChildComponent handleClick={handleClick} />
        </div>
    
    </div>
  );
};

export default ParentComponent;
