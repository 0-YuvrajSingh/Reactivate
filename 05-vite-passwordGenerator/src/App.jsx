import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  }, [length, number, character]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">🔐 Password Generator</h1>

        {/* Password Display + Copy */}
        <div className="flex items-center mb-6 w-full bg-white/5 border border-none rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="flex-grow px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={copyPassword}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-[10px] rounded-none"
          >
            Copy
          </button>
        </div>


        {/* Controls */}
        <div className="space-y-4">
          {/* Length Slider */}
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-sm font-medium">
              Length: {length}
            </label>
            <input
              id="length"
              type="range"
              min={8}
              max={25}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-2/3 accent-orange-500"
            />
          </div>

          {/* Include Numbers */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="number"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
              className="accent-orange-500"
            />
            <label htmlFor="number" className="text-sm">
              Include Numbers
            </label>
          </div>

          {/* Include Special Characters */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="character"
              checked={character}
              onChange={() => setCharacter((prev) => !prev)}
              className="accent-orange-500"
            />
            <label htmlFor="character" className="text-sm">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
