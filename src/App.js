import React, {useState} from "react";
import "./style.css";

export default function App() {
const [className, setClassName] = useState('red');

 const changeColor = () => {setClassName('yellow' )};

  return (
    <div>
      <button className={
        if (className !== 'red'){
          return className ==='yellow'
        }
        return red
        } onClick={changeColor}>Поменять цвет</button>
    </div>
  );
}
