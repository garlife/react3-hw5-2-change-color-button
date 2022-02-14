import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [className, setClassName] = useState('red');
  const [isColorRed, setIsColorRed] = useState(false);

  const changeColor = () => {
    setIsColorRed(!isColorRed);
    console.log(isColorRed);
    if (isColorRed === true){
      return (setClassName('red'))
    }
    return (setClassName('yellow'));
  };


  return (
    <div>
      <button className={className} onClick={changeColor}>
        Изменить цвет кнопки на {className === 'red' ? 'Жёлтый' : 'Красный'}
      </button>
    </div>
  );
}
