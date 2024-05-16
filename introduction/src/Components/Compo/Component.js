import React from "react";
import "./Compostyle.css";
import img from "../../../src/Assets/1.png";
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="container">
        <h1>
          Here's a breakdown of what a React Component is and how it works:
        </h1>
        <h1>1.Modularity:</h1>
        <h3>
          React Components are designed to be modular, meaning you can break
          down your user interface into smaller, manageable pieces. Each
          component can represent a part of your UI, such as a button, a form
          field, a navigation bar, etc.
        </h3>
        <h1>2.Reusability:</h1>
        <h3>
          Once you define a React Component, you can reuse it multiple times
          throughout your application. This makes your code more efficient and
          easier to maintain since you don't have to duplicate code for similar
          UI elements.
        </h3>
        <h1>3.Composition:</h1>
        <h3>
          React Components can be composed together to build complex user
          interfaces. You can nest components inside other components, creating
          a hierarchy of reusable elements.
        </h3>
        <h1>4.Lifecycle Methods:</h1>
        <h3>
          React Components have lifecycle methods that allow you to hook into
          different stages of a component's life, such as when it's first
          created, updated, or destroyed. This gives you control over what
          happens at each stage and allows you to perform actions like fetching
          data, updating the DOM, etc.
        </h3>
        <h1>5.Virtual DOM:</h1>
        <h3>
          React uses a Virtual DOM to efficiently update the actual DOM. When a
          component's state or props change, React compares the Virtual DOM with
          the real DOM and only updates the parts that have changed. This makes
          React very fast and efficient.
        </h3>
        <h4>
          Here's a simple example of a React Component written in JSX (a syntax
          extension for JavaScript often used with React):
        </h4>
        <div className="output">
        <img src={img} alt="" />
        <h1 >SAMPLE OUTPUT</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
        </div>
        <h3>
          In this example, MyComponent is a simple React Component that displays
          a count and a button to increment it. It uses React's state to keep
          track of the count and updates it when the button is clicked. This
          component can be reused anywhere in your application where you need a
          count with an increment button.
        </h3>
      </div>
    );
  }
}

export default Component;
