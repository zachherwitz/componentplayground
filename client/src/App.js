import React, { useState } from "react";
import "./App.css";

// components
import NeumorphicToggle from "./components/NeumorphicToggle";

const App = () => {
  const [displayedComponent, setDisplayedComponent] = useState();
  const componentList = ["Reset", "Neumorphic Toggle"];

  const setComponent = e => {
    setDisplayedComponent(e.target.value);
  };

  return (
    <div className="App">
      <header>Header</header>
      <main>
        <div className="sidebar">
          <ul>
            {componentList.map((cmp, i) => {
              return (
                <li key={i}>
                  <button value={cmp} onClick={setComponent}>
                    {cmp}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="component-container">
          {displayedComponent === "Reset" && <h1>Reset</h1>}
          {displayedComponent === "Neumorphic Toggle" && <NeumorphicToggle />}
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
