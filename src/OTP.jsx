import React, { useState } from "react";

const App = () => {
  const [otp, setOtp] = useState("");

  const generateOTP = () => {
    const min = 1000;
    const max = 9999; 
    const randomNumber = randomNumberInRange(min, max);
    setOtp(randomNumber.toString());
    alert(`OTP is: ${randomNumber}`);
  };

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  return (
    <div className="wrapper">
      {/* <button onClick={generateOTP}> */}
        {/* Click Me Generate OTP */}
      {/* </button> */}
    </div>
  );
};

export default App;