import React from "react";
import img from "../../../src/Assets/1.png";
import "./Renderstyle.css";
function Render() {
  // Original array of items
  const items = [
    { id: 1, name: "React Js" },
    { id: 2, name: "Node js" },
    { id: 3, name: "Vue Js" },
  ];

  // Function to render list items
  const renderListItems = () => {
    // Modify this to repeat or add more items
    const repeatedItems = [...items]; // Repeat the items twice
    // You can also manually add more items like this:
    // const repeatedItems = [...items, { id: 4, name: 'Item 4' }, { id: 5, name: 'Item 5' }];

    return repeatedItems.map((item) => <li key={item.id}>{item.name}</li>);
  };

  return (
    <div className="container">
      <h1>RENDERING LISTS</h1>
      <h4>
        In React, rendering a list refers to dynamically generating components
        or elements based on an array of data. This is a common task when
        building user interfaces that display a collection of items, such as a
        list of products, messages, or users.
      </h4>
      <h3>
        Here's a breakdown of how rendering a list typically works in React:
      </h3>
      <h1>Data Source:</h1>
      <h3>
        You start with an array of data, often fetched from an API, stored in
        state, or passed as props to a component.
      </h3>
      <h1>Mapping Data to Components:</h1>
      <h3>
        You use the .map() method of the array to iterate over each item in the
        array. Inside the .map() function, you return a React element for each
        item. This could be a custom component or a built-in HTML element.
      </h3>
      <h1>Rendering</h1>
      <h3>
        {" "}
        You render the array of elements in the JSX of your component. This
        effectively creates multiple instances of the component or elements
        based on the data.
      </h3>
      <h4>Here's an example in code:</h4>
      <img src={img} alt="" />
      <h4>In this example:</h4>
      <ul>
        <h3>
          <li>
            We have a MyList component that takes an array of items as a prop.
          </li>
          <li>
            Inside MyList, we use the .map() method to iterate over each item in
            the items array and return a{" <li>"} element for each one.
          </li>
          <li>
            We include a key prop for each {"<li>"} element to help React
            efficiently update the list when items are added, removed, or
            rearranged.
          </li>
          <li>
            In the App component, we define an array of data (data) and pass it
            as the items prop to MyList.
          </li>
        </h3>
      </ul>
      <h3>
        When the App component is rendered, it will display a bulleted list with
        each item from the data array.
      </h3>
      <hr></hr>
      <h1>Sample Output </h1>
      <ul>{renderListItems()}</ul>
      <hr></hr>
      
    </div>
  );
}

export default Render;
