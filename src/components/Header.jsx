import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import location from '../assets/location.png'
import UseCurrentLocation from '../hooks/UseCurrentLocation'
import { Link } from 'react-router-dom'
import ShoppingCarts from './ShoppingCarts'
import { useRecoilValue, useRecoilState } from 'recoil'
import { basketInfoState, isloginState, locationState } from '../recoil/atoms'
import axios from 'axios'


export default function Header() {

    const [isLogin, setIsLogin] = useRecoilState(isloginState);
    const locationData = useRecoilValue(locationState);
    const [basketInfo, setBasketInfo] = useRecoilState(basketInfoState);
    // console.log("위치 데이터:", locationData);


    const [addressChecked, setAddressChecked] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);


    const handleLogout = () => {
        localStorage.removeItem("localStorage");
        setIsLogin(false);
        window.location.href = '/';
    };


    const handleButtonClick = () => {
        setShowShoppingCart(!showShoppingCart); // 다이얼로그를 열고 닫는 상태를 토글합니다.
        console.log("문이 열립니다!")
    }
    // console.log(addressChecked)



    const handleBasketInfo = () => {
        axios
            .get('http://3.37.4.231:8080/basket-info', {
                params: {
                    memberId: 1,
                    latitude: locationData.latitude,
                    longitude: locationData.longitude,
                },
            })
            .then((response) => {
                const basket = response.data.result;
                setBasketInfo(basket);
                // setIsLoading(true);
                console.log("장바구니 정보1:", basket)
            })
            .catch((error) => {
                console.error('장바구니 정보 불러오는 중 에러 발생:', error);
            });
    }



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


                                {isLogin ? (
                                    <li className='ml-4'>
                                        <button onClick={handleLogout} className="text-black transition hover:text-gray-500/75">로그아웃</button>
                                    </li>
                                ) : (
                                    <li className='ml-4'>
                                        <Link
                                            className="text-black transition hover:text-gray-500/75"
                                            to="/login"
                                        >
                                            로그인
                                        </Link>
                                    </li>
                                )}

                                <li className='ml-4'>
                                    <Link
                                        className="text-black transition hover:text-gray-500/75"
                                        to="/signup"
                                    >
                                        회원가입
                                    </Link>
                                </li>


                                <li className='ml-4'>
                                    {/* <Link */}
                                    {/* to={"/shoppingcarts"}> */}
                                    <p
                                        className="text-black transition hover:text-gray-500/75 cursor-pointer"
                                        onClick={() => {
                                            handleBasketInfo()
                                            handleButtonClick()


                                        }}
                                    >
                                        <div className="relative py-2">
                                            <div className="absolute left-4 top-0">
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>
                                        </div>
                                    </p>                                    {/* </Link> */}
                                </li>
                                {<ShoppingCarts
                                    open={showShoppingCart} onClose={() => setShowShoppingCart(false)} />}
                                {/* <ShoppingCarts
                                    open={showShoppingCart} onClose={() => setShowShoppingCart(false)} /> */}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-6 text-sm mt-0">
                        <div className="sm:flex sm:gap-4 mr-20">
                            <Link to="/">
                                <img
                                    className="h-5"
                                    src={location}
                                    alt='location'
                                >
                                </img>
                            </Link>
                            <span>
                                <UseCurrentLocation
                                    addressChecked={addressChecked}
                                    setAddressChecked={setAddressChecked}
                                />
                            </span>

                            <div className="sm:flex sm:gap-4 ml-6">
                                <Link
                                    className="text-black transition"
                                    to="/signup"
                                >

                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </header >
    )
}