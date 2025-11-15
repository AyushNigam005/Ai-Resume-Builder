import React from "react";

// Simple reusable Card component
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`bg-white rounded-xl shadow-md border border-gray-200 p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;