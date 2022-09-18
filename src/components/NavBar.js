import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs';


// import logo
import Logo from '../assets/logo.svg';




const NavBar = () => {

  const navigate = useNavigate();

const toLogin = () => {
  navigate('/login');}

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <div className='flex items-center gap-6'>
        <Link className='hover:text-violet-900 transition' to='/'>
            Flights
          </Link>
          <Link className='hover:text-violet-900 transition' to='/stays'>
            Destinations
          </Link>
          <Link className='hover:text-violet-900 transition' to='/carRental'>
            Car Rentals
          </Link>
          
          <button 
        onClick={toLogin }
        className='  cursor-pointer bg-purple-700 ml-10 p-1
          hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition
           ' >
        <BsPerson 
        className='text-white ' 
        size={22} />
        </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;



