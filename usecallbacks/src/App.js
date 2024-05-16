import './App.css';
import ParentComponent from './Component/Parantcomponent';

function App() {
  return (
   <div className='container'>
    <h1>UseCallBack</h1>
    <hr></hr>
    <h2>Code Breakdown:</h2>
    <h3>1. Imports:</h3>
    <ul>
      <li>React: The core React library for building user interfaces.</li>
      <li>useState: A React hook for managing state within functional components.</li>
      <li>useCallback: A React hook for memoizing functions to optimize performance.</li>
    </ul>
    <h3>2. Child Component (ChildComponent.js):</h3>
    <ul>
      <li>Defines a functional component named ChildComponent that takes a single prop, handleClick.</li>
      <li>Logs a message to the console indicating the component's rendering (for demonstration purposes).</li>
      <li>Returns a button element with the text "Click Me". When clicked, it calls the handleClick function passed as a prop.</li>
    </ul>
    <h3>3. Parent Component (ParentComponent.js):</h3>
    <ul>
      <li>Defines a functional component named ParentComponent.</li>
      <li>Manages the counter state using the useState hook:
        <ul>
          <li>count: Stores the current count value, initialized to 0.</li>
          <li>setCount: A function to update the count state.</li>
        </ul>
      </li>
      <li>Uses useCallback to create a memoized version of the handleClick function:
        <ul>
          <li>handleClick function:
            <ul>
              <li>Logs a message to the console indicating the button click (for demonstration purposes).</li>
              <li>Updates the count state by incrementing it.</li>
            </ul>
          </li>
          <li>Dependency array: 
            <ul>
              <li>[count] is included to ensure the function is recreated only when the count value changes. This optimization prevents unnecessary re-renders of the ChildComponent due to changes in the handleClick function reference.</li>
            </ul>
            </li>
        </ul>
      </li>      
    </ul>
    <h3>Explanation:</h3>
    <ul>
      <li>The handleClick function is responsible for handling the button click and updating the count state.</li>
      <li>By using useCallback with a dependency array containing count, we ensure that the ChildComponent only receives a new reference to the handleClick function when the count value changes. This prevents unnecessary re-renders of the ChildComponent in cases where the button click wouldn't cause any visual changes (e.g., when the count remains the same).</li>
      <li>The console logs are included here for demonstration purposes. You can remove them in your actual application.</li>
    </ul>
    <h1>Sample Oupt</h1>
    <h1>View Output Console log</h1>
    <hr></hr>
      <ParentComponent/>
      <hr></hr>
   </div>
  );
}

export default App;
