import './App.css';
import ParentComponent from './Component/ParentComponent';

function App() {
  return (
    <div className='container'>
      <h1>UseMemo</h1>
      <hr></hr>
      <h2>Code Breakdown:</h2>
      <h3>1. Imports:</h3>
      <ul>
        <li>React: The core React library for building user interfaces.</li>
        <li>useState: A React hook for managing state within functional components.</li>
        <li>useMemo: A React hook for memoizing the result of a function to improve performance.</li>
      </ul>
      <h3>2. Usememo Component:</h3>
      <ul>
        <li>Defines a functional component named Usememo.</li>
        <li>Manages two state variables using useState:
          <ul>
            <li>name: Stores the current name, initially set to "React".</li>
            <li>count: Stores the current count, initially set to 0.</li>
          </ul>
        </li>
        <li>Calculates a value based on the count using useMemo:
          <ul>
            <li>calcvalue: Uses useMemo to memoize the result of the calculation function.</li>
            <li>Logs a message to the console indicating that a calculation is being performed (useful for debugging purposes).</li>
            <li>Performs a loop that iterates 232 times, incrementing num within each iteration. This simulates a time-consuming calculation.</li>
            <li>Returns the final value of num.</li>
          </ul>
        </li>
      </ul>
      <h3>Explanation:</h3>
      <ul>
        <li>The Usememo component demonstrates the use of useState to manage state and useMemo for performance optimization.</li>
        <li>The useState hook handles the name and count state variables, which are updated using setter functions (setname and setcount).</li>
        <li>The useMemo hook with the calculation function ensures that the calculation is performed only when the count value changes. This prevents unnecessary re-renders that could occur if the calculation were called directly on every render.</li>
        <li>The functional update syntax ((prevcount) = prevcount + 1) is used to update the count state, guaranteeing that the latest count value is used in the calculation.</li>
        <li>Using useMemo is particularly beneficial for time-consuming calculations or functions that rely on external data fetching.</li>
      </ul>
      <h1>Sample Output</h1>
      <h1>Output view Console log</h1>
      <ParentComponent/>
    </div>
  );
}

export default App;
