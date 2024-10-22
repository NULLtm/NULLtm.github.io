import { useRef, useState } from 'react';
import './DropDown.css';
import button from './imgs/button1.png'

const DropDown = ({ container }) => {

  const [clicked, setClicked] = useState(false);

  const image = useRef();

  return (
    <>
      <button onClick={(e) => {
        if(clicked) {
          const ele = document.getElementsByClassName(container+'-clicked')[0];
          ele.className = container;
          image.current.className = 'image';
          setClicked(false);
        } else {
          const ele = document.getElementsByClassName(container)[0];
          ele.className = container+'-clicked';
          image.current.className = 'image-clicked';
          setClicked(true);
        }
      }} className='button'><img ref={image} src={button} alt='black triangle' className='image'></img></button>
    </>
  );
};

export default DropDown;