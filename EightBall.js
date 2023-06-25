import React, { useState } from 'react';

function EightBall({ answers }) {
  const [currentMessage, setCurrentMessage] = useState('Think of a question');
  const [currentColor, setCurrentColor] = useState('black');

  const shake = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setCurrentMessage(randomAnswer.msg);
    setCurrentColor(randomAnswer.color);
  };

  return (
    <div
      className="eight-ball"
      style={{ backgroundColor: currentColor }}
      onClick={shake}
    >
      <span className="message">{currentMessage}</span>
    </div>
  );
}

export default EightBall;
