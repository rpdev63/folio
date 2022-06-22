import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#433A3F] text-white border-b-[#119c89]-500 z-20' >
      <div className='initiales'>
        RP
      </div>

      {/* Menu : visible au desssus de medium*/ }
      <ul className='topbar hidden text-sm lg:text-lg md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Qui je suis
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Mes skills
          </Link>
        </li>
        <li>
          <Link to='works' smooth={true} duration={500}>
            Mes réalisations
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Me contacter
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={25}/> : <FaTimes size={25}/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={ 
          !nav
            ? 'hidden'
            : ' mobile absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Qui je suis
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Mes skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='works' smooth={true} duration={500}>
            Mes Réalisations
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Me contacter
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul className='social'>
          <li className='w-[160px] '>
              <a className='py-2 px-1 flex justify-between items-center w-full ml-[-110px] hover:ml-[-5px] hover:pl-[5px] duration-300 bg-[#C17767] ' href='/'>
              Linkedin <FaLinkedin size={30} />
              </a>
          </li>
          <li className='w-[160px] '>
            <a className='py-2 px-1 flex justify-between items-center w-full ml-[-110px] hover:ml-[-5px] hover:pl-[5px] duration-300 bg-[#C17767] ' href='/'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] '>
            <a className='py-2 px-1 flex justify-between items-center w-full ml-[-110px] hover:ml-[-5px] hover:pl-[5px] duration-300 bg-[#C17767]' href='/'>
            Codewars <SiCodewars size={30} />
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
