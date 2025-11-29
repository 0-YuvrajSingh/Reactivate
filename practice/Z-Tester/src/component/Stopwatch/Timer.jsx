import { useEffect } from "react";
import { useState } from "react";
import "./Timer.css";

export function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState(0);

  useEffect(() => {
    let timerId;
    if (isRunning && time > 0) {
      timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time == 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timerId);
  }, [time, isRunning]);

  const handleAddTime = () => {
    setTime(time + inputTime);
    setInputTime(0);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h1>Display CountDown: {time}</h1>
      <p>Add Timer</p>
      <input
        type="number"
        value={inputTime}
        onChange={(e) => setInputTime(Number(e.target.value))}
        placeholder="in seconds"
      />
      <button onClick={handleAddTime}>Add Time</button>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
