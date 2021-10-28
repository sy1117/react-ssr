import React, { useState } from "react";

export const App = ({ data }) => {
  const [step, setStep] = useState(1);

  const handleStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Server Side Rendering Test</h1>
        <p>Clicked : {step}</p>
        <button onClick={handleStep}>+1</button>
      </header>
    </div>
  );
};

export default App;
