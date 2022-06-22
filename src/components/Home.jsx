import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Home(){
  return (
    <div name='home' className='bg-[#f2f7f2] w-full h-screen 'style={{paddingTop : 100}} >
      {/* Container */}
      <div className=' max-w-[1000px] mx-auto px-10  text-gray-800 flex flex-col justify-center h-full'>
      <p className='text-4xl font-bold inline border-b-4 border-[#39a9db] w-[200px] '>Qui je suis ?</p>
      <p className='pt-2' style={{fontSize :  20 }}>Bonjour, je suis </p>
        <h1 className='text-[#39A9DB]  text-5xl sm:text-7xl font-bold mt-2'>
          Rémi Prince
        </h1>
        <h2 className='text-3xl sm:text-4xl text-[#C17767] '>
            Le développeur junior qui monte !
        </h2>
        <p className='pt-4 max-w-[700px]'> Je me considère comme un <span className=' text-[#39A9DB] font-bold '> développeur full-stack</span> car ma curiosité m'amène à explorer plusieurs facettes du métier de développeur. Mes points forts actuels sont mes connaissances sur les frameworks <span style={{fontWeight : 500}}>Angular</span> et <span style={{fontWeight : 500}}>Symfony</span>. Capable de m'adapter rapidement sur des nouvelles technologies, je peux travailler en autonomie ou en équipe, sur le front-end comme le back-end.
        </p>
        <p> </p>
        <div className=' sm:flex items-center'>
            <p className='mb-5 mt-5 sm:mb-0 sm:mt-0'> Et sinon, vous savez quoi ? Je cherche du boulot ! </p>
            <a className='sm:ml-4 border-2 border-[#C17767]  text-[#C17767] px-4 py-3  rounded-sm hover:bg-[#433a3f] hover:text-white duration-200 hover:border-[#433a3f] font-bold text-sm' href='https://rpdev63.github.io/CV-RemiPrince/' target="_blank"> Voir mon CV </a>
        </div>
        <div>
            <a  className='hidden xl:flex mt-5 sm:mt-0 cursor-pointer group flex items-center hover:decoration-text-[#C17767] underline w-min' > <Link to='skills' smooth={true} duration={500}>Poursuivre... </Link> .  
                <span className='group-hover:rotate-90 duration-100'>
                <HiArrowNarrowRight className='ml-2 '/> 
                </span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Home;