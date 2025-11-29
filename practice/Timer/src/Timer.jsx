import { useState, useRef } from "react";

export const Timer = () => {
  const [input, setInput] = useState(""); // input as string from input field
  const [time, setTime] = useState(0);    // time in seconds (number)

  const intervalRef = useRef(null);

  // Add timer from input
  const addTimer = () => {
    const num = Number(input);
    if (!num || num <= 0) return; // ignore invalid or zero input
    setTime(num);
    setInput(""); // clear input field
  };

  // Start countdown
  const start = () => {
    if (intervalRef.current) return; // prevent multiple intervals
    if (time <= 0) return;           // do not start if time is 0
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {             // stop at 0
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Stop countdown
  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Reset timer
  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setInput(""); // optional: clear input
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "#f4f4f4",
      }}
    >
      <h1>⏳ Countdown Timer</h1>

      <input
        type="number"
        placeholder="Enter seconds"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "1rem",
          width: "150px",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={addTimer}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Add
      </button>

      <div style={{ fontSize: "3rem", marginBottom: "20px" }}>{time}s</div>

      <div>
        <button
          onClick={start}
          style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Start
        </button>

        <button
          onClick={stop}
          style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            background: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Stop
        </button>

        <button
          onClick={reset}
          style={{
            margin: "5px",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            background: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
