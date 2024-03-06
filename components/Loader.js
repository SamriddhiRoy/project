import React, { useEffect, useState } from 'react';

const LoaderPage = () => {
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown < 100) {
        setCountdown((prevCountdown) => prevCountdown + 1);
      } else {
        setLoading(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval); 
  }, [countdown]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader-content">
            {}
            <div className="number">{countdown}</div>
          </div>
        </div>
      ) : (
   
        <div>
          
        </div>
      )}
    </>
  );
};

export default LoaderPage;










