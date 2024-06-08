import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState();
  /* You will need some function to handle the key pressed and button events */
  const onA = (e) => {
    setA(e.target.value);
  };

  const onB = (e) => {
    setB(e.target.value);
  };

  const check = () => {
    if (a && b) {
      setResult(parseInt(a) + parseInt(b));
    } else {
      setError("Please enter a number");
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result || error} disabled />
      <button onClick={check}>Compute</button>
    </main>
  );
}

export default App;
