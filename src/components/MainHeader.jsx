import React from 'react'
import { Link } from 'react-router-dom'
// import mainlogo from '../assets/mainlogo.png'
import registration from '../assets/registrationlogo.png'
import CookingRegistration1 from '../pages/CookingRegistration1'



export default function MainHeader() {





    return (
        <main className="relative h-[70vh] overflow-hidden bg-white dark:bg-gray-300">
            <header className="z-30 flex items-center w-full h-24 sm:h-15 ">
                <div className="container flex items-center justify-between px-6 mx-auto">
                </div>
            </header>
            <div className="relative z-20  flex items-center overflow-hidden bg-white dark:bg-gray-300">
                <div className="container relative flex px-5 py-30 mx-auto">
                    <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                        <h1 className="flex flex-col text-6xl font-black leading-none uppercase font-bebas-neue sm:text-8xl dark:text-white">
                            Click
                            <span className="text-5xl sm:text-7xl">
                                the Link !
                            </span>
                        </h1>
                        <p className="text-3xl font-bold dark:text-gray-800 mt-5">
                            간편한 장보기, 링쿡하세요.
                        </p>
                        {/* <div className="flex mt-8">
                            <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                                Get started
                            </a>
                            <a href="#" className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Read more
                            </a>
                        </div> */}
                    </div>
                    <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                        <Link to='/cookingregistration1'>
                            <img src={registration}
                                className="w-full max-w-xs m-auto md:max-w-xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </main >

    )
}



