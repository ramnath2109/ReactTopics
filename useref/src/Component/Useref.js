import React, { useEffect, useRef } from "react";
import "./Useref.css"; // Importing CSS file

const Useref = () => {
  const colorparagraph = useRef(null);
  const colors = ["#d529d0", "#3ffc10", "#d51858","#A58F0D","#5FDB05","#FC06AD","#1406FC","#F13D6D","#0874F1","#238E06","#DFFC0D"];

  useEffect(() => {
    console.log(colorparagraph);
    console.log(colorparagraph.current);
  });

  const styleparagraph = () => {
    const randomcolor = Math.floor(Math.random() * colors.length);
    colorparagraph.current.style.color = colors[randomcolor];
  };

  return (
    <div className="container">
      <h1>USEREF HOOKS</h1>
      <button onClick={styleparagraph}>Click Me To Color Change!</button>
      <h1 ref={colorparagraph}>Welcome To My Tutorial</h1>
    </div>
  );
};

export default Useref;
