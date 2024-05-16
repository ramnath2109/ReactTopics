import './App.css';
import Counter from './Component/Counter';
import image from './assets/1.png'
function App() {
  return (
   <div className='container'>
      <h1>UseReducer</h1>
      <hr></hr>
      <h3>1. Counter.js (Counter Component):</h3>
        <ul>
          <li><h4>Imports:</h4>
            <ul>
              <li>React: The core React library for building user interfaces.</li>
              <li>useReducer: A React hook for managing state within functional components.</li>
              <li>'./Counter.css' (optional): Imports an external CSS file for styling the counter (not shown here).</li>
            </ul>
          </li>
          <li><h4>Initial State:</h4>
            <ul>
              <li>Defines an initialState object with a single property: count, set to 0. This represents the initial state of the counter.</li>
            </ul>
          </li>
          <li><h4>Reducer:</h4>
          <ul>
            <li>Defines the reducer function, which is a pure function that takes the current state and an action as arguments, and returns the updated state.</li>
          </ul>
          </li>
          <li><h4>Counter Component:</h4>
            <ul>
              <li>Defines the Counter functional component:
                <ul>
                  <li>Uses useReducer with the reducer function and the initialState to manage the counter state. This creates a state variable named state and a dispatch function named dispatch.</li>
                  <li>Renders the counter UI within a div with the class counter-container:</li>
                  <li>Increments the count when clicked, dispatching an action object with type 'increment'.</li>
                  <li>Decrements the count when clicked, dispatching an action object with type 'decrement'.</li>
                  <li>Resets the count when clicked, dispatching an action object with type 'reset'.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h3>2. Running the Counter Application:</h3>
        <ol>
          <li>Create a new React project: npx create-react-app my-counter-app</li>
          <li>Place the provided Counter.js code in a file named Counter.js within your project's src directory.</li>
          <li>(Optional) Create a Counter.css file (not provided here) to style the counter.</li>
          <li>Start the development server: npm start or yarn start</li>
          <li>Open http://localhost:3000 in your browser to see the counter application.</li>
        </ol>
      <img src={image} alt=''/>
      <h2>Sample Output</h2>
      <hr></hr>
    <Counter/>
    <hr></hr>
   </div>
  );
}

export default App;
