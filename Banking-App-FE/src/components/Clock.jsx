import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 style={{ color: '#cfd8dc' }}>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;