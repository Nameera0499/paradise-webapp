import React from 'react';
import './onHoverStyle.css';

const CustomScrollbar = ({ children }) => {
  return (
    <div className="custom-scrollbar">
      <div className="custom-scrollbar-content">{children}</div>
    </div>
  );
};

export default CustomScrollbar;
