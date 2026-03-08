'use client';

import { useState } from 'react';

export default function Counter() {

  const [count, setCount] = useState(0);

  //Design for button using css
  const buttonStyle = {
    padding: '8px 16px',
    margin: '0 5px',
    fontSize: '14px',
    cursor: 'pointer'
  };

  return (
    <div>
      <h2>Counter</h2>
      
      {/* For Count */}
      <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
        {count}
      </div>
      
      {/* Buttons */}
      <button 
        style={buttonStyle}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      
      <button 
        style={buttonStyle}
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      >
        Decrement
      </button>
      
      <button 
        style={buttonStyle}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}