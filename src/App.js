import React, { useState } from 'react';
import './style.css';

export default function App() {
  // const [className, setClassName] = useState('red');
  const [isColorRed, setIsColorRed] = useState(true);

  const changeColor = () => {
    setIsColorRed(!isColorRed);
    console.log(isColorRed);
    // if (isColorRed === true){
    //   return (setClassName('red'))
    // }
    // return (setClassName('yellow'));
  };


  return (
    <div>
      <button className={isColorRed === true ? 'red' : 'yellow'} onClick={changeColor}>
        Изменить цвет кнопки на {isColorRed === true ? 'Жёлтый' : 'Красный'}
      </button>
    </div>
  );
}
