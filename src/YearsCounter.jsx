import React, { useState, useEffect } from 'react';
import './YearsCounter.css';

const YearsCounter = ({ startDate }) => {
  // Function to calculate precise years
  const calculatePreciseYears = (start) => {
    const now = new Date();
    const startDate = new Date(start);

    return (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
  };

  const [years, setYears] = useState(calculatePreciseYears(startDate));

  useEffect(() => {
    const updateYears = () => {
      setYears(calculatePreciseYears(startDate));
    };

    // Update every day (in milliseconds)
    const interval = setInterval(updateYears, 1);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div>
      <span className='main'>{years.toFixed(8)}</span> <span className='tail'>years old</span>
    </div>
  );
};

export default YearsCounter;