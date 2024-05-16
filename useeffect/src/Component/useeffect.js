import React, { useState, useEffect } from 'react';
import './useeffect.css'

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // State to track whether the timer is running or not

  useEffect(() => {
    console.log('useEffect executed');
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      console.log('cleanup');
      clearInterval(intervalId);
    };
  }, [isRunning, seconds]); // Include isRunning and seconds in the dependency array

  const toggleTimer = () => {
    setIsRunning(prevState => !prevState); // Toggle the value of isRunning
  };

  return (
    <div className='container'>
        <h1>useEffect</h1>
        <hr></hr>
        <h3>To identify when a component re-renders due to changes in dependencies in the useEffect hook, you can simply log a message inside the useEffect function.
             This will show you each time the effect is executed.</h3>
        <h2>In this modified component:</h2>
        <h3>We added console log statements inside the useEffect hook to log when it is executed and when the cleanup function runs.</h3>
        <h3>We also included seconds in the dependency array, as it's being used in the effect. This will cause the effect to re-run whenever seconds changes.</h3>
        <h3>Now, whenever the component re-renders due to changes in isRunning or seconds, you'll see corresponding log messages in your console.</h3>
      <h1>Sample Output</h1>
      <h1>Output view console log</h1>
      <hr></hr>
      <p>Timer: {seconds} seconds</p>
      <button onClick={toggleTimer}>
        {isRunning ? 'Stop Timer' : 'Start Timer'}
      </button>
    </div>
  );
}

export default Timer;
