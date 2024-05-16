import React from 'react'
import Router from '../Router/Router'
import '../Common_errors/Style.css'

const Layout = () => {
  return (
    <div className='container'>
      <h1>Common Errors</h1>
      <hr></hr>
        <h2>Introduction</h2>
        <p>These are the most basic errors and often involve typos, missing characters (like semicolons or parentheses), or incorrect usage of JavaScript syntax within JSX.Linters and code editors with syntax highlighting can help catch these early on.</p>
        <p>Common errors encountered in React development, along with potential causes and solutions. Error: Components not rendering as expected, not updating on state changes. Causes: This can occur due to improper state management, incorrect use of lifecycle methods, or incorrect usage of hooks</p>
        <h2>We’ll be covering the following error messages:</h2>
       <ul>
        <li>Warning: Each child in a list should have a unique key prop</li>
        <li>Prevent usage of Array index in keys</li>
        <li>React Hook useXXX is called conditionally. React Hooks must be called in the exact same order in every component render</li>
        <li>React Hook has a missing dependency: ‘XXX’. Either include it or remove the dependency array</li>
       <li>Can’t perform a React state update on an unmounted component</li>
       <li>Too many re-renders. React limits the number of renders to prevent an infinite loop</li>
       <li>Objects are not valid as a React child / Functions are not valid as a React child</li>
       <li>Adjacent JSX elements must be wrapped in an enclosing tag</li>
       
       </ul>
      <Router/>
      <hr></hr>
    </div>
  )
}

export default Layout
