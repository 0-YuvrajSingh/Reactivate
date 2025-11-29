const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [time, setTime] = useState(5);
  const [canResend, setCanResend] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [otp, setOtp] = useState(null);

  useEffect(() => {
    if (time <= 0){
      setCanResend(true);
      return;
    }
    const timeoutId = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [time]);

  const handleGenerate = () => {

    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(newOtp);

    setTime(5);
    setCanResend(false);
    setClicked(true);
  }

  return(
    <div className = "container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{clicked ? otp : `Click 'Generate OTP' to get a code`}</h2>
      <p id="otp-timer" aria-live="polite">
        {!clicked && ""}

        {clicked && time > 0 && `Expires in: ${time} seconds`}

        {clicked && time <= 0 && "OTP expired. Click the button to generate a new OTP."}
      </p>

      <button id="generate-otp-button" onClick = {handleGenerate} disabled={!canResend}>Generate OTP</button>
    </div>
  )
};