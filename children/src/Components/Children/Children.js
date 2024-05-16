// App.js
import React, { useState } from "react";
import Card from "../Card/Card";
import img from "../../../src/Assests/1.png";
import img1 from "../../../src/Assests/2.png";
import './Children.css'

const Children = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className='container'>
      <h1>SPECIFYING CHILDREN</h1>
      <h3>
        In React, specifying children refers to how components can contain other
        components or elements within them. This feature allows you to compose
        complex UIs from simpler building blocks. Let me illustrate with a
        simple example:
      </h3>
      <br></br>
      <h3>
        Suppose you have a Card component that represents a card with a title
        and some content. You want to be able to use this component to create
        various cards throughout your application, each with different content.
        Here's how you can achieve this by specifying children:
      </h3>
      <img src={img} alt="" />
      <br></br>
      <h3>
        In this Card component, children is a special prop provided by React
        that represents the elements nested inside the Card component when it's
        used. Here's how you can use the Card component in another component:
      </h3>
      <img src={img1} alt="" />
      <h3>
        <h3>In this example, we're passing different content (children) to the Card
        component each time it's used. The content can be any valid JSX, such as
        text, elements, or even other components. Inside the Card component, we
        render the children prop within the {'<div className="content">'}{" "}
        element, allowing the content to be displayed inside the card.</h3>
      </h3>
      <div className="app">
        <Card title="First Card">
          <p>This is the content of the first card.</p>
        </Card>

        <Card title="Second Card">
          <div className="msg">
            <p>Some more content here.</p>
            <button onClick={handleClick}>Click me</button>
          </div>
        </Card>

        {showMessage && <p>Message for you!</p>}
      </div>
    </div>
  );
};

export default Children;
