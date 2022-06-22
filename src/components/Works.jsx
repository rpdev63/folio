import bs from "../assets/screens/bs.png";
import folio from "../assets/screens/folio.png";
import snake from "../assets/screens/snake.png";
import sort from "../assets/screens/sort.png";
import enigme from "../assets/screens/enigme.png";
import sportshop from "../assets/screens/sportshop.png";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaPhp, FaAngular, FaJs, FaSymfony, FaReact, FaBootstrap, FaCss3Alt, FaSass, FaHtml5 } from "react-icons/fa";
import { SiFirebase, SiMariadb, SiTypescript, SiTailwindcss} from "react-icons/si"

function Works(){
    return (
        <div name='works' className='w-full md:h-screen bg-[#f2f7f2] text-gray-800'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div >
                <p className='text-4xl font-bold inline border-b-4 border-[#39a9db] '>
                Réalisations
                </p>
                <p className='py-4'>Ci-dessous des projets expérimentaux qui m'ont permis d'affûter mon code.</p>
            </div>    
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-2'>
    
                {/*Item 1 */}
                <div style={{ backgroundImage: `url(${bs})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 '>
                        baguette-speedrun.fr
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaAngular size={20}  color={"silver"}/>  </span>
                            <span className="px-2"><SiTypescript size={18} color={"silver"}/></span>
                            <span className="px-2"><FaSass size={20} color={"silver"}/></span>
                            <span className="px-2"><FaBootstrap size={20} color={"silver"}/></span>
                            <span className="px-2"><SiFirebase size={20} color={"silver"}/></span>
                            
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button style={{width : 70}} className=' text-center rounded-lg py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200'>
                                Accès
                                </button>
                            </a>
                            <a href='/'>
                                <button style={{width : 70}} className=' text-center rounded-lg px-4 py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200' >
                                Infos 
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Item 2 */}
                <div style={{ backgroundImage: `url(${sportshop})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        Sportshop
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaSymfony size={20}  color={"silver"}/>  </span>
                            <span className="px-2"><FaPhp size={25} color={"silver"}/></span>
                            <span className="px-2"><FaCss3Alt size={20} color={"silver"}/></span>
                            <span className="px-2"><SiMariadb size={22} color={"silver"}/></span>
                            
                        </div>
                        
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button style={{width : 85}} className=' text-center rounded-lg px-4 py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200' >
                                GitHub
                                </button>
                            </a>
                            <a href='/'>
                                <button style={{width : 70}} className=' text-center rounded-lg px-4 py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200' >
                                Infos 
                                </button>
                            </a>
                        
                        </div>
                    </div>
                </div>

                {/*Item 3 */}
                <div style={{ backgroundImage: `url(${snake})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        snake.js
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaHtml5 size={20}  color={"silver"}/> </span>
                            <span className="px-2"><FaCss3Alt size={20} color={"silver"}/></span>
                            <span className="px-2"><FaJs size={20}  color={"silver"}/>  </span>
                            <span className="px-2"><SiFirebase size={20} color={"silver"}/></span>
                            
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button style={{width : 70}} className=' text-center rounded-lg py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200'>
                                Accès
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                {/*Item 4 */}
                <div style={{ backgroundImage: `url(${sort})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        sort.js
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaHtml5 size={20}  color={"silver"}/> </span>
                            <span className="px-2"><FaCss3Alt size={20} color={"silver"}/></span>
                            <span className="px-2"><FaJs size={20} color={"silver"}/></span>                                                                                   
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button style={{width : 70}} className=' text-center rounded-lg py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200'>
                                Accès
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Item 5 */}
                <div style={{ backgroundImage: `url(${enigme})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        enigme.js
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaHtml5 size={20}  color={"silver"}/> </span>
                            <span className="px-2"><FaCss3Alt size={20} color={"silver"}/></span>
                            <span className="px-2"><FaJs size={20} color={"silver"}/></span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button style={{width : 70}} className=' text-center rounded-lg py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200'>
                                Accès
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Item 4 */}
                <div style={{ backgroundImage: `url(${folio})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        mon portfolio
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaReact size={20} color={"silver"}/></span>
                            <span className="px-2"><SiTailwindcss size={20} color={"silver"}/></span>                                                       
                        </div>
                    </div>
                </div>


            </div>
            <a  className=' cursor-pointer group flex items-center hover:decoration-text-[#C17767] underline w-min mt-6' > <Link to='contact' smooth={true} duration={500}>Poursuivre... </Link> .  
                    <span className='group-hover:rotate-90 duration-100'>
                        <HiArrowNarrowRight className='ml-2 '/> 
                    </span>
            </a>
        </div>
          
    </div>
    )
}

export default Works