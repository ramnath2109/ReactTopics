import './App.css';
import Useref from './Component/Useref';

function App() {
  return (
   <div className='container'>
    <h1>UseRef</h1>
    <hr></hr>
    <h2>Code Breakdown:</h2>
    <h3>1. Imports:</h3>
    <ul>
      <li>React: The core React library for building user interfaces.</li>
      <li>useEffect: A React hook for performing side effects in functional components.</li>
      <li>useRef: A React hook for creating mutable references within functional components.</li>
      <li>./Useref.css (optional): Imports an external CSS file for styling the component (not shown here).</li>
     </ul>
     <h3>2. Useref Component:</h3>
     <ul>
      <li>Defines a functional component named Useref.</li>
      <li>Creates a reference named colorparagraph using useRef(null). This reference will hold a reference to an existing DOM element later.</li>
      <li>Defines an array colors that contains a list of color values.</li>
      <li>Uses useEffect to perform a side effect (logging) after the component renders:
        <ul>
          <li>Logs the initial state of colorparagraph (null) and colorparagraph.current (also null). This demonstrates that the reference initially doesn't point to any DOM element.</li>
        </ul>
      </li>
      <li>Defines a function styleparagraph that handles color changes:
        <ul>
        <li>Generates a random color index using Math.floor(Math.random() * colors.length).</li>
        <li>Sets the color style property of the DOM element to the randomly chosen color from the colors array.</li>
        </ul>
      </li>
     </ul>
     <h3>Explanation:</h3>
     <ul>
      <li>The Useref component demonstrates the use of the useRef hook to create a reference that holds a mutable value in a functional component.</li>
      <li>The useEffect hook is used here for demonstration purposes to log the initial state of the reference. It's typically used for side effects like data fetching or subscriptions.</li>
      <li>The ref prop on the h1 element creates a connection between the reference colorparagraph and the DOM element. This allows the styleparagraph function to interact with the element's style.</li>
     </ul>
     <h1>Sample OutPut</h1>
     <hr></hr>
    <Useref/>
    <hr></hr>
   </div>
  );
}

export default App;
