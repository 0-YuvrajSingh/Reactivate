import { useState, useEffect } from 'react';

function App() {
  const [bgcolor, setBgColor] = useState('black');

  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  }, [bgcolor]);

  const changeBgColor = (bgcolor) => {
    setBgColor(bgcolor);
  }
  return (
    <div>
      style={{
        backgroundColor: color,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        gap: '10px'
      }}
      <button onClick={() => {changeBgColor('red')}}>Red</button>
    </div>
  );

}

export default App