import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for styling

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="clock">
      <h1 className="title">Current Time</h1>
      <div className="time">
        <span className="digit">{hours < 10 ? '0' + hours : hours}</span>
        <span className="digit">{minutes < 10 ? '0' + minutes : minutes}</span>
        <span className="digit">{seconds < 10 ? '0' + seconds : seconds}</span>
      </div>
    </div>
  );
};

export default Clock;
