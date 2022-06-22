import React from "react";
import  angular  from "../assets/logos/angular.png";
import  css  from "../assets/logos/css.png";
import  firebase  from "../assets/logos/firebase.png";
import  html  from "../assets/logos/html.png";
import  js  from "../assets/logos/javascript.png";
import  maria  from "../assets/logos/mariaDb.png";
import  php  from "../assets/logos/php.png";
import  symfony  from "../assets/logos/symfony.png";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Skills(){
    return(
        <div name='skills' className='bg-[#f2f7f2] min-h-screen ' style={{paddingTop : 100}}>
            {/* Container liste de skills*/}
            <div className='max-w-[1000px] mx-auto px-10  text-gray-800 '>
                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-[#39a9db] '>Skills</p>
                    <p className='py-4'>Voici les technologies avec lesquelles je suis à l'aise :</p>
                </div>
                {/*Card skill */}
                <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-2'>
                    <div className='bg-white shadow-md shadow-[rgba(0,0,0,0.5)] hover:scale-110 duration-500 py-2'>
                        <img className='w-20 mx-auto mt-6' src={html} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='bg-white shadow-md shadow-[rgba(0,0,0,0.5)] hover:scale-110 duration-500 py-2'>
                        <img className='w-20 mx-auto mt-6' src={css} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='bg-white shadow-md shadow-[rgba(0,0,0,0.5)] hover:scale-110 duration-500 py-2'>
                        <img className='w-20 mx-auto mt-6'  src={js} alt="HTML icon" />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='bg-white shadow-md shadow-[rgba(0,0,0,0.5)] hover:scale-110 duration-500 py-2'>
                        <img className='w-20 mx-auto mt-6' src={angular} alt="HTML icon" />
                        <p className='my-4'>Angular 11+</p>
                    </div>
                    <div className='bg-white shadow-md shadow-[rgba(0,0,0,0.5)] hover:scale-110 duration-500 py-2'>
                        <img className='w-20 mx-auto mt-6' src={php} alt="HTML icon" />
                        <p className='my-4'>PHP 7+</p>
                    </div>
                    <div className='bg-white shadow-md shadow-[rgba(0,0,0,0.5)] hover:scale-110 duration-500 py-2'>
                        <img className='w-20 mx-auto mt-6' src={symfony} alt="HTML icon" />
                        <p className='my-4'>Symfony 5+</p>
                    </div>
                    <div className='bg-white shadow-md shadow-[rgba(0,0,0,0.5)] hover:scale-110 duration-500 py-2'>
                        <img className='w-20 mx-auto mt-6' src={firebase} alt="HTML icon" />
                        <p className='my-4'>Firebase</p>
                    </div>
                    <div className='bg-white shadow-md shadow-[rgba(0,0,0,0.5)] hover:scale-110 duration-500 py-2'>
                        <img className='w-20 mx-auto mt-6' src={maria} alt="HTML icon" />
                        <p className='my-4'>MariaDB</p>
                    </div>
                </div>
                <a   className=' hidden xl:flex cursor-pointer group flex items-center hover:decoration-text-[#C17767] underline w-min mt-5' > <Link to='works' smooth={true} duration={500}>Poursuivre... </Link> .  
                    <span className='group-hover:rotate-90 duration-100'>
                        <HiArrowNarrowRight className='ml-2 '/> 
                    </span>
                </a>
            </div>
    </div>
    )
}

export default Skills;