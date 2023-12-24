// src/components/Timer.js
import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onFinish }) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime === 0) {
          clearInterval(interval);
          onFinish();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, onFinish]);

  return (
    <div>
      <p>Time remaining: {timeRemaining} seconds</p>
    </div>
  );
};

export default Timer;
