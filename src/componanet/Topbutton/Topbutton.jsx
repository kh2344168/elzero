// App.js
// Kindacode.com
import { useEffect, useState } from "react";
import "./Topbutton.css";
import {IoIosArrowUp} from "react-icons/io";
import {IoIosArrowDown} from "react-icons/io";
// import { motion } from "framer-motion"

const Topbutton = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  // }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
    
  };
  
  const scrollTobottom = () => {
    window.scrollTo({
      top: 100000,
      behavior: 'smooth',
    });


  };

  return (
    <div className="buttom">
      {showButton == true ?   
        <button onClick={scrollToTop} className="back-to-top">
          <IoIosArrowUp className="icon"/>
        </button>
      :<button onClick={scrollTobottom} className="back-to-top">
        <IoIosArrowDown className="icon icon_buttom"/>
      </button> }
    </div>
  );
};

export default Topbutton;