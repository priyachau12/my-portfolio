import React from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {GoProjectRoadmap} from 'react-icons/go';
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <Link to='header' spy={true} smooth={true} offset={50} duration={500} >
        <AiOutlineHome />
      </Link>

      <Link to='about' spy={true} smooth={true} offset={50} duration={500} >
        <AiOutlineUser />
      </Link>

      <Link to='experience' spy={true} smooth={true} offset={-100} duration={500} >
        <BiBook />
      </Link>

      <Link to='services' spy={true} smooth={true} offset={-100} duration={500} >
        <RiServiceLine />
      </Link>

      <Link to='portfolio' spy={true} smooth={true} offset={-100} duration={500} >
        <GoProjectRoadmap />
      </Link>

      <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} >
        <BiMessageSquareDetail />
      </Link>
      
    </nav>
  )
}

export default Nav