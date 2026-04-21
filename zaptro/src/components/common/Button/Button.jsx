import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-lg font-semibold transition-all cursor-pointer border-none';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-800 hover:shadow-md disabled:opacity-50',
    secondary: 'bg-red-600 text-white hover:bg-red-700 disabled:opacity-50',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white disabled:opacity-50',
  }[variant];

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];

  const buttonClass = [baseClasses, variantClasses, sizeClasses, disabled && 'opacity-50 cursor-not-allowed', className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
