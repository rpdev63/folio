import bs from "../assets/screens/bs.png";
import folio from "../assets/screens/folio.png";
import snake from "../assets/screens/snake.png";
import sort from "../assets/screens/sort.png";
import enigme from "../assets/screens/enigme.png";
import sportshop from "../assets/screens/sportshop.png";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaPhp, FaAngular, FaJs, FaSymfony, FaReact, FaBootstrap, FaCss3Alt, FaSass, FaHtml5, FaQuestionCircle } from "react-icons/fa";
import { SiFirebase, SiMariadb, SiTypescript, SiTailwindcss} from "react-icons/si"

function Works(){
    return (
        <div name='works' className='  bg-[#f2f7f2] min-h-screen' style={{paddingTop : 100}} >
            <div className='max-w-[1000px] mx-auto px-10  text-gray-800 '>
                <div >
                <p className='text-4xl font-bold inline border-b-4 border-[#39a9db] '>
                Réalisations
                </p>
                <p className='py-4'>Ci-dessous des projets expérimentaux qui m'ont permis d'affûter mon code.</p>
            </div>    
            {/* Container */}
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 py-2'>
    
                {/*Item 1 */}
                <div style={{ backgroundImage: `url(${bs})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767] max-w-[320px]' id="first-item" >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 '>
                        baguette-speedrun.fr
                        <button className="floating-btn">
                            <FaQuestionCircle style={{marginLeft : 12,  position : "relative", top : 3}}  color="white"/> 
                            <p className="tooltip translate-y-[20px] translate-x-[-153px] h-[280px]" >
                            Un site que j'ai construit de A à Z avec Angular autour d'un sujet léger. Bien que son utilité soit discutable, c'est avant tout pour moi un terrain de jeu qui me permet de progresser à la fois sur le front-end le back-end. Vous trouverez plus d'infos avec le lien vidéo 😉 <em> ( bientôt disponible ) </em> .  
                            </p>
                        </button> 
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaAngular size={20}  color={"silver"}/>  </span>
                            <span className="px-2"><SiTypescript size={18} color={"silver"}/></span>
                            <span className="px-2"><FaSass size={20} color={"silver"}/></span>
                            <span className="px-2"><FaBootstrap size={20} color={"silver"}/></span>
                            <span className="px-2"><SiFirebase size={20} color={"silver"}/></span>
                            
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='https://baguette-speedrun.fr/home' target='_blank'>
                                <button style={{width : 70}} className=' text-center rounded-lg py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200'>
                                Accès
                                </button>
                            </a>
                            <a href='https://www.youtube.com/watch?v=YPu5Ygjqgis'>
                                <button style={{width : 78}} className=' text-center rounded-lg px-4 py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200' >
                                Vidéo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Item 2 */}
                <div style={{ backgroundImage: `url(${sportshop})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767] max-w-[320px]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        Sportshop
                        <button className="floating-btn">
                            <FaQuestionCircle style={{marginLeft : 12,  position : "relative", top : 3}}  color="white"/> 
                            <p className="tooltip translate-y-[20px] translate-x-[-164px] h-[280px]" >
                            Sportshop est un projet fil rouge entamé en formation qui m'a permis de me familiariser avec le framework Symfony et les bases de données SQL. Ici on simule l'achat d'articles de sport par des utilisateurs. Un back-office est également présent. Vous trouverez plus d'infos avec le lien vidéo 😉 <em> ( bientôt disponible ) </em> .
                            </p>
                        </button> 
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaSymfony size={20}  color={"silver"}/>  </span>
                            <span className="px-2"><FaPhp size={25} color={"silver"}/></span>
                            <span className="px-2"><FaCss3Alt size={20} color={"silver"}/></span>
                            <span className="px-2"><SiMariadb size={22} color={"silver"}/></span>
                            
                        </div>
                        
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/rpdev63/Sportshop' target='_blank'>
                                <button style={{width : 80}} className=' text-center rounded-lg px-4 py-3 m-2 bg-white border-1  text-sm hover:text-[#39a9db] hover:font-bold duration-200' >
                                GitHub
                                </button>
                            </a>
                            <a href='/'>
                                <button style={{width : 72}} className=' text-center rounded-lg px-4 py-3 m-2 bg-white border-1  text-sm hover:text-[#39a9db] hover:font-bold duration-200' >
                                Vidéo 
                                </button>
                            </a>
                        
                        </div>
                    </div>
                </div>

                {/*Item 3 */}
                <div style={{ backgroundImage: `url(${snake})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767] max-w-[320px]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        snake.js 
                        <button className="floating-btn">
                            <FaQuestionCircle style={{marginLeft : 12,  position : "relative", top : 3}}  color="white"/> 
                            <p className="tooltip translate-y-[20px] translate-x-[-150px]" >
                                Je n'ai pas inventé le jeu du snake et j'ai dû m'appuyer sur de l'existant pour comprendre comment animer le serpent. Cependant, je vous présente ici une version ( très ) personnalisé avec plusieurs variétés de pommes, des ciseaux, de la musique, des bruitages, et aussi un leaderboard 😎 ! 
                            </p>
                        </button> 
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaHtml5 size={20}  color={"silver"}/> </span>
                            <span className="px-2"><FaCss3Alt size={20} color={"silver"}/></span>
                            <span className="px-2"><FaJs size={20}  color={"silver"}/>  </span>
                            <span className="px-2"><SiFirebase size={20} color={"silver"}/></span>
                            
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='https://rpdev63.github.io/snake.js/' target="_blank">
                                <button style={{width : 70}} className=' text-center rounded-lg py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200'>
                                Accès
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                {/*Item 4 */}
                <div style={{ backgroundImage: `url(${sort})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767] max-w-[320px]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        sort.js
                        <button className="floating-btn">
                            <FaQuestionCircle style={{marginLeft : 12,  position : "relative", top : 3}}  color="white"/> 
                            <p className="tooltip translate-y-[20px] translate-x-[-145px]" >
                                C'est ici qu'on voit que je suis un peu dérangé et que j'aime me casser la tête ! Cette page est remplie d'algorithmes javascript pour vous expliquer comment fonctionne des algorithmes de tri 🙃. J'espère ne pas vous refilez la migraine ! <em> ( bientôt disponible ) </em>
                            </p>
                        </button> 
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
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767] max-w-[320px]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        enigme.js                        
                        <button className="floating-btn">
                            <FaQuestionCircle style={{marginLeft : 12,  position : "relative", top : 3}}  color="white"/> 
                            <p className="tooltip translate-y-[20px] translate-x-[-157px]" >
                                Un petit jeu d'énigme ici, où il vaut faudra cliquer sur des boutons dans le bon ordre pour progresser. Le jeu est court mais pas si évident 😅 ! Hésitez pas à y faire un tour.
                            </p>
                        </button>
                        </span> 
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaHtml5 size={20}  color={"silver"}/> </span>
                            <span className="px-2"><FaCss3Alt size={20} color={"silver"}/></span>
                            <span className="px-2"><FaJs size={20} color={"silver"}/></span>
                        </div>
                        <div className='pt-8 text-center'>
                            <a href='https://rpdev63.github.io/enigme.js/'>
                                <button style={{width : 70}} className=' text-center rounded-lg py-3 m-2 bg-white border-1  text-md hover:text-[#39a9db] hover:font-bold duration-200'>
                                Accès
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Item 6 */}
                <div style={{ backgroundImage: `url(${folio})` }}
                className='shadow-md shadow-md shadow-[rgba(0,0,0,0.5)] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-[#C17767] max-w-[320px]' >
                {/* Surcouche , apparaît au hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-[Pacifico] tracking-wider text-gray-200 flex justify-center'>
                        Mon portfolio
                        </span>
                        <div className="text-gray-300 text-center mt-2 flex flex-row justify-center items-center pt-3">
                            <span className="px-2"><FaReact size={20} color={"silver"}/></span>
                            <span className="px-2"><SiTailwindcss size={20} color={"silver"}/></span>                                                       
                        </div>
                    </div>
                </div>


            </div>
            <a  className=' hidden xl:flex cursor-pointer group flex items-center hover:decoration-text-[#C17767] underline w-min mt-6' > 
                <Link to='contact' smooth={true} duration={500}>Poursuivre... </Link> .  
                <span className='group-hover:rotate-90 duration-100'>
                    <HiArrowNarrowRight className='ml-2 '/> 
                </span>
            </a>
        </div>
          
    </div>
    )
}

export default Works