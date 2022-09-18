import React, { useState ,useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {

  /* const [ visable, setVisable ] = useState(false) 

  const taggleVisability=()=>{
    window.pageYOffset > 100 ? setVisable(true) : setVisable(false);
  }

  useEffect( ( ) => {
    window.addEventListener( 'scroll', taggleVisability );

    return window.removeEventListener( 'scroll', taggleVisability );
  }, [] )

  const scrollToTop = ( ) => {
    window.scrollTo(
      {
        top : 0 ,
        behavior : "smooth" ,
      }
    )
  }


  return (
    <div>
    <button 
    type = "button"
    onClick = { scrollToTop }
    className = { visable ? 'opacity-800' : 'opacity-0' }
     > 
    <FaArrowUp 
    className="h-6 w-6 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2',
   " aria-hidden="true" />
    </button>
    </div>
  )
} */
   const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <ToTop onClick={toTop} scrollState={scrollState}>
      <img src={logo} alt="" />
    </ToTop>
  );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 1rem;
  right: 2rem;
  img {
    height: 1.5rem;
  }
  border-radius: 2rem;
  background-color: #1900ff39;
  padding: 1rem;
`;
 