import React from "react";
import img1 from "../../../src/Assets/1.png";
import img2 from "../../../src/Assets/2.png";
import img3 from "../../../src/Assets/3.png";
import img4 from "../../../src/Assets/4.png";
import Hello from "../Helloworld/Hello";
import './Projectstyle.css'


const Project = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>YOUR FIRST PROJECT COMPONENT</h1>
      </div>
      <h1>Setting Up React:</h1>
      <h3>
        First, make sure you have Node.js and npm (Node Package Manager)
        installed on your system. You can install React using npm. If you
        haven't done so already, you can set up a new React project using Create
        React App. Run the following commands in your terminal:
      </h3>
      <img src={img1} alt="" />
      <br></br>
      <h1>Creating Your Component: </h1>
      <h3>
        Once your React project is set up, you can create your first component.
        Let's create a simple component called HelloWorld that displays a
        greeting message. Create a new file named HelloWorld.js inside the src
        directory of your React project. Here's the code for HelloWorld.js:
      </h3>
      <img src={img2} alt="" />
      <h1>Using Your Component:</h1>
      <h3>
        {" "}
        Now that you've created your HelloWorld component, you can use it in
        your application. Open the src/App.js file and replace its contents with
        the following code:
      </h3>
      <img src={img3} alt="" />
      <br></br>
      <h1>Running Your App:</h1>
      <h3>
        {" "}
        Finally, you can run your React application to see your component in
        action. Open your terminal, make sure you're in the root directory of
        your React project, and run:
      </h3>
      <img src={img4} alt="" />
      <h3>
        This command will start a development server, and your default web
        browser should open automatically to display your React app. You should
        see "Hello, World!" displayed on the page.
      </h3>
      <div className="App">
       
      <header className="App-header">
      <h1>  SAMPLE  OUTPUT</h1>
        <Hello/>
      </header>
    </div>
  
  </div>
  );
};

export default Project;
