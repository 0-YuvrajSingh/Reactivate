import { useState } from 'react';
import './App.css';
import viteLogo from '/vite.svg'; // ✅ FIXED: Import the logo

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(prev => prev + 1);
  };

  const removeValue = () => {
    setCounter(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="main">
      <div className="container">
        <img src={viteLogo} alt="Vite Logo" className="logo" />
        <h1>REACT || VITE</h1>
        <h2>Counter: <span className="value">{counter}</span></h2>
        <div className="buttons">
          <button onClick={addValue} className="btn">+</button>
          <button onClick={removeValue} className="btn">-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
