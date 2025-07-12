import React from 'react'
import Navbar from './common/Navbar'
import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/mongodb.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/cupid.png"
import P2 from "../assets/bulkmail.png"
import P3 from "../assets/weather.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'
import express from '../assets/express.png'
import firebase from '../assets/firebase.png'
import github from '../assets/github.png'
import render from '../assets/render.png'
import tailwind from '../assets/tailwind.png'
import vercel from '../assets/vercel.png'
import vscode from '../assets/vscode.png'
import './Home.css'
import resume from '../assets/MUJUBAR RAHAMAN_RESUME.pdf'

import { Link } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    return (
        <div>

            <div className='flex items-center justify-center'>
                <div className="w-full sm:w-1/2 flex-col justify-center">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>Hy! I Am</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Mujubar Rahaman</h2>
                    <img src={BlogProfileImage} className='w-60 block sm:hidden' alt="Blog Profile Image" />
                    <p className='py-2'>I can create stunning website for your company, Do check my works. I won't disappoint you. Try me for 7 Days before you decide anything.</p>
                    <button className='button-style mt-2'>Hire Me</button>
                </div>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogProfileImage} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                </div>

            </div>


            <div className='flex justify-evenly py-6 flex-grow grid-container '>
                <div className=' grid-item' >
                    <img src={HTML} style={{ width: "50px" }} />
                    <p>HTML</p>
                </div>
                <div className='grid-item'>
                    <img src={CSS} style={{ width: "50px" }} />
                    <p>CSS</p>
                </div>
                <div className='grid-item'>
                    <img src={JS} style={{ width: "50px" }} />
                    <p>Java Script</p>
                </div>
                <div className='grid-item'>
                    <img src={REACTICON} style={{ width: "50px" }} />
                    <p>React.js</p>
                </div>
                <div className='grid-item '>
                    <img src={DB} style={{ width: "50px" }} />
                    <p>Mongo DB</p>
                </div>

                <div className='grid-item'>
                    <img src={NODE} style={{ width: "50px" }} />
                    <p>Node.js</p>
                </div>

                <div className='grid-item'>
                    <img src={express} style={{ width: "100px" }} />
                    <p>Express.js</p>
                </div>

                <div className='grid-item'>
                    <img src={firebase} style={{ width: "50px" }} />
                    <p>Fire Base</p>
                </div>

                <div className='grid-item'>
                    <img src={github} style={{ width: "50px" }} />
                    <p>Git Hub</p>
                </div>

                <div className='grid-item'>
                    <img src={render} style={{ width: "50px" }} />
                    <p>Render</p>
                </div>

                <div className='grid-item'>
                    <img src={vercel} style={{ width: "50px" }} />
                    <p>Vercel</p>
                </div>

                <div className='grid-item'>
                    <img src={tailwind} style={{ width: "50px" }} />
                    <p>TailWind CSS</p>
                </div>

                <div className='grid-item'>
                    <img src={vscode} style={{ width: "50px" }} />
                    <p>VS Code</p>
                </div>





            </div>

            <div className='flex flex-col mt-10 items-center justify-around sm:flex-row'>
                <div className='flex-col'>
                    <div className='mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'>6</div>
                        <p className='text-center font-medium'>Projects Completed</p>
                    </div>
                    <div className='mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center'>
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'>6</div>

                        <p className='text-center font-medium'>Months of Experience</p>
                    </div>
                </div>

                <div className='ml-4 mt-4 sm:mt-0'>
                    <h2 className='text-3xl sm:text-7xl font-bold'>My Awesome</h2>
                    <h2 className='text-3xl sm:text-7xl font-bold text-orange-400'>Services</h2>
                    <p className='my-2'>I have attahed my Resume here for your Reference</p>
                    <a href={resume} download="resume">    <button className='button-style mt-2'>Download CV</button></a>


                </div>




            </div>

            <div>
                <h2 className='text-center text-5xl my-14 font-bold'>Checkout My Live <span className='text-orange-400'>Projects</span> Here</h2>
                {/* <div className=' flex justify-around my-5 flex-col sm:flex-row '> */}
                <div className='project-container'>


                    <div className='project-item'>
                       
                            <img src={P1} className='w-64 border rounded-md cursor-pointer' alt="" />
                       
                        <div className='flex justify-between mt-2'>
                            <Link to="https://cupid-frontend.onrender.com/login">
                                <p className='button-style '>Live</p>
                            </Link>
                            <Link>
                                <p className='button-style'>Github</p>
                            </Link>

                        </div>
                    </div>

                    <div className='project-item'>
                      
                            <img src={P2} className='w-64 border rounded-md cursor-pointer' alt="" />

                 
                        <div className='flex justify-between mt-2'>
                            <Link to="https://bulk-mail-app-frontend-git-main-mujubar-rahamans-projects.vercel.app/">
                                <p className='button-style '>Live</p>
                            </Link>
                            <Link>
                                <p className='button-style'>Github</p>
                            </Link>

                        </div>

                    </div>

                    <div className='project-item'>

                        <img src={P3} className='w-64 border rounded-md cursor-pointer' alt="" />
                        <div className='flex justify-between mt-2'>
                            <Link to="https://weather-app-3f53.vercel.app/">
                                <p className='button-style '>Live</p>
                            </Link>
                            <Link>
                                <p className='button-style'>Github</p>
                            </Link>

                        </div>

                    </div>

                </div>
            </div>


            <div className='flex items-center justify-center my-14'>
                <div className='justify-center hidden sm:block'>
                    <img src={BlogImage} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
                    <h2 className='text-3xl md:text-6xl font-bold pb-2'>I like to Write</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Blogs about tech</h2>

                    <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className='button-style mt-2' onClick={() => navigate("/blogs")}>Read My Blogs</button>
                </div>


            </div>


            <Footer />


        </div>
    )
}

export default Home