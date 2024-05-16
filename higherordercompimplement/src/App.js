import React from "react";
import withAuthentication from "./Component/WithAuthentication";
import './App.css'

const SecretComponent = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated ? (
        <p style={{textAlign:"center"}}>Welcome to Dashboard </p>
      ) : (
        <p>You are not authenticated to view this content.</p>
      )}
    </div>
  );
};

const App = () => {
  const WrappedSecretComponent = withAuthentication(SecretComponent);

  return (
    <div className="container">
    
      <WrappedSecretComponent />
    </div>
  );
};

export default App;
