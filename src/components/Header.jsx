import React, { useState } from 'react'
import logo from '../assets/logo.png'
import location from '../assets/location.png'
import UseCurrentLocation from '../hooks/UseCurrentLocation'
import { Link } from 'react-router-dom'
import ShoppingCarts from './ShoppingCarts'


export default function Header() {

    const [addressChecked, setAddressChecked] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);

    const handleButtonClick = () => {
        setShowShoppingCart(true);
    }


    console.log(addressChecked)

    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link to="/">
                            <img
                                className="h-10"
                                src={logo}
                                alt='LinCook'
                            >
                            </img>
                        </Link>

                        <Link to="/">
                            <span className='text-2xl font-semibold'>LinCook</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">

                                <li className='ml-4'>
                                    <Link
                                        className="text-black transition hover:text-gray-500/75"
                                        to="/"
                                    >
                                        설정
                                    </Link>
                                </li>

                                <li className='ml-4'>
                                    <Link
                                        className="text-black transition hover:text-gray-500/75"
                                        to="/team"
                                    >
                                        Team
                                    </Link>
                                </li>

                                <li className='ml-4'>
                                    <Link
                                        className="text-black transition hover:text-gray-500/75"
                                        to="/test"
                                    >
                                        테스트
                                    </Link>
                                </li>

                                <li className='ml-4'>
                                    <Link
                                        className="text-black transition hover:text-gray-500/75"
                                        to="/login"
                                    >
                                        로그인
                                    </Link>
                                </li>


                                <li className='ml-4'>
                                    <a
                                        className="text-black transition hover:text-gray-500/75"
                                        href="/signup"
                                    >
                                        회원가입
                                    </a>
                                </li>

                                <li className='ml-4'>
                                    <p
                                        className="text-black transition hover:text-gray-500/75"
                                        onClick={handleButtonClick}
                                    >
                                        장바구니
                                    </p>
                                </li>
                                {showShoppingCart && <ShoppingCarts />}


                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-6 text-sm mt-0">
                        <div className="sm:flex sm:gap-4 mr-20">
                            <a href="/">
                                <img
                                    className="h-5"
                                    src={location}
                                    alt='location'
                                >
                                </img>
                            </a>
                            <span>
                                {/* <UseCurrentLocation
                                    addressChecked={addressChecked}
                                    setAddressChecked={setAddressChecked}
                                /> */}
                            </span>

                            <div className="sm:flex sm:gap-4 ml-6">
                                <a
                                    className="text-black transition"
                                    href="/signup"
                                >

                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </header >
    )
}