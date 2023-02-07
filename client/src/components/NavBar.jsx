import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';
import Logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false);
    
    const handleClick = () => setNav(!nav);

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
            <div>
                <Link to='home' smooth={true} duration={500} >
                    <img src={Logo} alt="Logo Image" style={{width: '50px'}} className="m-10" />
                </Link>
            </div>

            {/* menu */}
            
                <ul className='hidden md:flex m-10 '>
                    <li>
                        <Link to="home" smooth={true} offset={50} duration={500} class="opacity-50 hover:opacity-100">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} offset={50} duration={500} class="opacity-50 hover:opacity-100" >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} offset={50} duration={500} class="opacity-50 hover:opacity-100">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} offset={50} duration={500} class="opacity-50 hover:opacity-100">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} offset={50} duration={500} class="opacity-50 hover:opacity-100 focus:opacity-100">
                            Hit Me Up
                        </Link>
                    </li>
                </ul>
           

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500} >
                        Portfolio
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500} >
                        Hit Me Up
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                         href='https://www.linkedin.com/in/eric-deleon132/'>
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                         href='https://github.com/132E'>
                            Github<FaGithub size={30}/>
                        </a>
                    </li><li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff009d]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                         href='/'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li><li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#02aa67]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                         href='/'>
                            Resume <BsFillPersonFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default NavBar;