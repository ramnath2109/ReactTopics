import React, { useMemo, useState } from "react";
import './Usememo.css'; // Import CSS file

function Usememo() {
  const [name, setname] = useState("React");
  const [count, setcount] = useState(0);
  
  // calculation prev value assignedto count
  const calcvalue = useMemo(() => calculation(count), [count]);
  
  const increment = () => {
    setcount((prevcount) => prevcount + 1);
  };
  
  return (
    <div className="container">
      <button onClick={increment}>click me</button>
      <h1>{count}</h1>
      <hr />
      <h1>{`My name is ${name}`}</h1>
      <button onClick={() => setname("REACT JS")}>Click to change name</button>
      <hr />
      <h1>My Calculation</h1>
      <h1>{calcvalue}</h1>
    </div>
  );
};

const calculation = (num) => {
  console.log("I am calculating");
  for (let i = 0; i < 232; i++) {
    num += 1;
    console.log(num);
  }
  return num;
};

export default Usememo;
