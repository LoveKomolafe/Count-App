import React, { useEffect, useState } from 'react';
// import './App.css'
import * as Icon from 'react-feather';

function App() {
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  const ChevronUp = () => {
    return <Icon.ChevronUp />;
  };

  const ChevronsUp = () => {
    return <Icon.ChevronsUp />;
  };

  const Rotate = () => {
    return <Icon.RotateCcw />;
  };

  const Hash = () => {
    return <Icon.Hash />;
  };

  const ChevronsDown = () => {
    return <Icon.ChevronsDown />;
  };

  const ChevronDown = () => {
    return <Icon.ChevronDown />;
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  };

  const setRandomNumber = () => {
    setCount(getRandomNumber());
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Current Value</p>

        <h1>{count}</h1>

        <div className="buttons">
          <button onClick={() => setCount((count) => count + 1)}>
            <ChevronUp />
          </button>

          <button onClick={() => setCount((count) => count + 10)}>
            <ChevronsUp />
          </button>

          <button onClick={() => setCount(0)}>
            <Rotate />
          </button>

          <button onClick={setRandomNumber}>
            <Hash />
          </button>

          <button onClick={() => setCount((count) => count - 10)}>
            <ChevronsDown />
          </button>

          <button onClick={() => setCount((count) => count - 1)}>
            <ChevronDown />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
