import { useState, useRef } from "react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>⏱ Stopwatch</h1>

      <div
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        {time}s
      </div>

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
