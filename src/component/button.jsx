import React from 'react';
import '../styles/button.css';

// Create a function button which takes a url and a label
function Button({ url, label }) {
  return (
    <a href={url} rel="noopener noreferrer" className="button">
      {label}
    </a>
  );
}

export default Button;