import React, { useState, useEffect } from "react";

function App() {
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    const main = document.getElementById("weather");
    main.style.backgroundColor = getBackgroundColor();
  }, [isRaining]);

  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getTitle() {
    return isRaining ? "It's sunny" : "It's raining";
  }

  function getBackgroundColor() {
    return isRaining ? "yellow" : "blue";
  }

  

  return (
    <main id="weather">
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
