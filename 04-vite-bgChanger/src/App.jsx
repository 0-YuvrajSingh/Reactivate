import { useState } from 'react';

function App() {
  const [color, setColor] = useState('black');

  return (
    <div
      className="w-full h-screen duration-75"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white/10 backdrop-blur shadow-lg rounded-lg p-3">
          <button
            className="outline-none px-4 py-1 rounded-full bg-red-600 text-white shadow-lg"
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-green-600 text-white shadow-lg"
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg"
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-yellow-500 text-white shadow-lg"
            onClick={() => setColor('yellow')}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-orange-500 text-white shadow-lg"
            onClick={() => setColor('orange')}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-purple-600 text-white shadow-lg"
            onClick={() => setColor('purple')}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-pink-500 text-white shadow-lg"
            onClick={() => setColor('pink')}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-gray-700 text-white shadow-lg"
            onClick={() => setColor('gray')}
          >
            Gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-white text-black shadow-lg"
            onClick={() => setColor('white')}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
