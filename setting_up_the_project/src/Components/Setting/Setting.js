import React from "react";
import img1 from "../../../src/Assets/1.png";
import img2 from "../../../src/Assets/2.png";
import img3 from "../../../src/Assets/3.png";
import img4 from "../../../src/Assets/4.png";
import img5 from "../../../src/Assets/4.png";
import './Settingstyle.css'
const Setting = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>SETTING UP THE PROJECT</h1>
      </div>
      <h1>Install Node.js and npm: </h1>
      <h3>
        React applications are typically built using Node.js and npm (Node
        Package Manager). You can download and install Node.js from the official
        website: Node.js. npm is bundled with Node.js, so once you have Node.js
        installed, npm will be available too.
      </h3>
      <h1>Create a New React App: </h1>
      <h3>
        Facebook provides a tool called create-react-app to quickly set up a new
        React project with a predefined folder structure and build
        configuration. Open your terminal or command prompt and run the
        following command:
      </h3>
      <img src={img1} alt="" />
      <h4>
        Replace my-react-app with the name you want to give your project. This
        command will create a new directory with the specified name and set up a
        new React project inside it.
      </h4>
      <h1>Navigate to Your Project Directory:</h1>
      <h3>
        After the create-react-app command has finished executing, navigate into
        your project directory
      </h3>
      <img src={img2} alt="" />
      <h1>Start the Development Server: </h1>
      <h3>
        Once inside your project directory, you can start the development server
        by running:
      </h3>
      <img src={img3} alt="" />
      <h4>
        This command will start the development server and open your default web
        browser to preview your React application. Any changes you make to your
        code will automatically trigger a reload of the application in the
        browser.
      </h4>
      <h1>Exploring the Project Structure</h1>
      <h4>
        The create-react-app command creates a standard project structure for
        your React application. Key directories and files include:
      </h4>
      <ul>
        <li>
          public/: Contains the HTML template (index.html) and other static
          assets like images.
        </li>
        <li>src/: Contains the source code of your React application.</li>
        <li>
          index.js: Entry point of your application, where React is initialized
          and the main component is rendered.
        </li>
        <li>App.js: The main component of your application.</li>
        <li>App.css: Styles specific to the main component.</li>
        <li>
          package.json: Configuration file that lists project dependencies and
          scripts.
        </li>
        <h1>Adding Additional Packages (Optional): </h1>
        <h3>
          Depending on your project requirements, you might need to install
          additional packages. You can use npm to install packages and manage
          dependencies. For example:
        </h3>
        <img src={img4} alt="" />
        <h3>
          This command installs the axios package for making HTTP requests and
          react-router-dom for handling routing in React applications.
        </h3>
        <h1>Building Your Application for Production:</h1>
        <h3>
          When you're ready to deploy your React application, you can build it
          for production by running:
        </h3>
        <img src={img5} alt="" />
        <h3>
          This command creates an optimized production build of your application
          in the build/ directory, which you can then deploy to a web server.
        </h3>
        <h4>
          That's a basic overview of setting up a React project. As you become
          more familiar with React development, you'll explore more advanced
          topics such as state management, component composition, and
          integrating with external APIs.
        </h4>
      </ul>
    </div>
  );
};

export default Setting;
