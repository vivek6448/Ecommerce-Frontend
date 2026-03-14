import React from 'react';
import './Loader.css';

const Loader = ({ size = 'md', fullscreen = false }) => {
  const loaderClass = `loader loader-${size} ${fullscreen ? 'loader-fullscreen' : ''}`.trim();

  return (
    <div className={loaderClass}>
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
