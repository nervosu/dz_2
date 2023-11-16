
import './App.css';
import React, { useState } from 'react';

const ColorSquare = () => {
  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');

  const handleSquareClick = () => {
    setColor1((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
    setColor2((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
  };

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color1,
          margin: '10px',
          display: 'inline-block',
        }}
        onClick={handleSquareClick}
      ></div>

      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color2,
          margin: '10px',
          display: 'inline-block',
        }}
        onClick={handleSquareClick}
      ></div>
    </div>
  );
};

export default ColorSquare;
