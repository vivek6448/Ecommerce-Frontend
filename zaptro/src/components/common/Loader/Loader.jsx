import React from 'react';

const Loader = ({ size = 'md', fullscreen = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-5',
  }[size];

  const containerClasses = fullscreen
    ? 'fixed inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-30 z-50'
    : 'flex flex-col items-center justify-center gap-4';

  return (
    <div className={containerClasses}>
      <div
        className={`border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin ${sizeClasses}`}
      ></div>
      <p className="text-gray-300">Loading...</p>
    </div>
  );
};

export default Loader;
