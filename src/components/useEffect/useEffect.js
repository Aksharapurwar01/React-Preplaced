// The useEffect hook is used to perform side effects in your functional components, such as fetching data, 
// subscribing to external events, or manually changing the DOM. It combines the functionality of componentDidMount, 
// componentDidUpdate, and componentWillUnmount in class components.

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p>Seconds: {seconds}</p>;
};

export default Timer;