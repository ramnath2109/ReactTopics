import React from 'react'
import Router from '../Router/Router'
import '../Router/Router.css'

const Layout = () => {
  return (
    <div className='container'>
      <h1>Controlled Elements</h1>
      <hr></hr>
        <h2>Introduction</h2>
        <p>In React, a controlled element is an input form element (like a text box, dropdown, or checkbox) where the value is managed by the React component's state, rather than the element itself. This means that whenever the user interacts with the element and changes its value, the React component is notified and can update its state accordingly.</p>
        <h2>Here's a breakdown of how controlled elements work</h2>
        <ul>
          <li><span>React State:</span> The component keeps track of the current value of the controlled element using React's state management features.</li>
          <li><span>Value as Prop:</span> The component passes the current value from its state down to the controlled element as a prop (property).</li>
          <li><span>User Interaction:</span> When the user interacts with the controlled element (e.g., types in a text box), an event is triggered.</li>
          <li><span>Event Handler: T</span> React component has an event handler function that is called when the event is triggered.</li>
          <li><span>Update State:</span> Inside the event handler function, the component updates its state with the new value from the controlled element.</li>
         </ul>
         <h2>1.Router Component:</h2>
         <ul>
          <li>This component sets up routing using React Router. It imports BrowserRouter, Routes, Route, and Link from 'react-router-dom'.</li>
          <li>Inside the BrowserRouter, it has a list (ul) of links (Link) to navigate between different pages.</li>
          <li>It uses the Routes component to define the routes and corresponding components.</li>
         </ul>
         <h2>2.UncontrolledInput Component:</h2>
         <ul>
          <li>It imports useRef from React to create a reference to the input element.</li>
          <li>It has a function handleSubmit that prevents the default form submission behavior and alerts the value of the input element.</li>
          <li>Inside the render, it has a form with an input element. The input element uses the ref attribute to associate it with the inputRef created using useRef</li>
          <li>When the form is submitted, the handleSubmit function is called, accessing the current value of the input element using the reference.</li>
         </ul>
        <h2>3.ControlledInput Component:</h2>
        <ul>
          <li>This component demonstrates a controlled input approach in React.</li>
          <li>It initializes inputValue state using useState(''), which represents the value of the input field.</li>
          <li>It defines a handleChange function to update the inputValue state whenever the input value changes.</li>
          <li>Inside the render, it has an input element with value set to inputValue and onChange event handler set to handleChange. This makes it a controlled input element.</li>
          <li>It displays the current input value below the input field using inputValue.</li>
        </ul>
        <h1>Sample OutPut Click This And Enter Value</h1>
        <hr></hr>
      <Router/>
      <hr></hr>
    </div>
  )
}

export default Layout
