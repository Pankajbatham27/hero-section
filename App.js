import Cans from "./Components/Cans/Cans";

import coca from './Components/Cans/images/coca.png';
import cocaBlack from './Components/Cans/images/coca-black.png';
import fanta from './Components/Cans/images/fanta.png';

import bg from './Components/Cans/images/bg.png';


import { useEffect, useState } from 'react';


function App() {

  const [count, setCount] = useState(0);

  const [animationType, setAnimationType] = useState('forward');

  const [isAnimating, setIsAnimating] = useState(false);


  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = document.getElementById('your-container-id'); // Replace 'your-container-id' with the actual ID of the container you want to listen to
    let timeoutId;

    
    const handleMouseScroll = (event) => {
      if (!isScrolling) {
        setIsScrolling(true);

        timeoutId = setTimeout(() => {
          setIsScrolling(false);
        }, 250); // Adjust the debounce duration (in milliseconds) as per your needs

        if (event.deltaY < 0) {
          changePreHandler(); // Call your desired function here with the argument 'scrollUp'
        } else {
          changeHandler(); // Call your desired function here with the argument 'scrollDown'
        }
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsScrolling(false);
        }, 250); // Adjust the debounce duration (in milliseconds) as per your needs
      }
    };

    container.addEventListener('wheel', handleMouseScroll);
    // window.addEventListener('keyup', handleKeyPress);

    return () => {
      container.removeEventListener('wheel', handleMouseScroll);
      // window.removeEventListener('keyup', handleKeyPress);
      clearTimeout(timeoutId);
    };
  }, [isScrolling]);

  

  const [content, setContent] = useState([
    {
      name: 'Coca-Cola Cherry Fizzy Drinks Diet Coke',
      image: coca,
      color: 'rgb(172 0 10)'
    },
    {
      name: 'Fanta Orange soda can illustration',
      image: fanta,
      color: 'rgb(255 146 66)'
    },
    {
      name: 'Coca-Cola Fizzy Drinks Diet Coke Diet drink',
      image: cocaBlack,
      color: 'rgb(0 0 0)'
    },
    {
      name: 'Fanta Orange soda can illustration',
      image: fanta,
      color: 'rgb(255 146 66)'
    }

  ])

  const changeHandler = () => {

    if (content.length - 1 > count) {
      setCount(count + 1)
      setAnimationType('forward');
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }


  }

  const changePreHandler = () => {

    if (count >= 1) {
      setCount(count - 1)
      setAnimationType('backward');
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }

  }

  return (
    <div className="app" id="your-container-id">
      <div className="canFull">
        <Cans lemon={bg} animationType={animationType} isAnimating={isAnimating} color={content[count].color} name={content[count].name} image={content[count].image} />
      </div>
    </div>
  );
}

export default App;
