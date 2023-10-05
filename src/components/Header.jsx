import React, { useState } from 'react'
import logo from '../assets/logo.png'
import location from '../assets/location.png'
import UseCurrentLocation from '../hooks/UseCurrentLocation'
import { Link } from 'react-router-dom'
import ShoppingCarts from './ShoppingCarts'
import { useRecoilValue, useRecoilState } from 'recoil'
import { basketInfoState, locationState } from '../recoil/atoms'
import axios from 'axios'


export default function Header() {


    const [basketInfo, setBasketInfo] = useRecoilState(basketInfoState);
    const locationData = useRecoilValue(locationState);


    const [addressChecked, setAddressChecked] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);

    const handleButtonClick = () => {
        setShowShoppingCart(!showShoppingCart); // 다이얼로그를 열고 닫는 상태를 토글합니다.
        console.log("문이 열립니다!")
    }
    console.log(addressChecked)



    const handleBasketInfo = () => {
        axios
            .get('http://3.37.4.231:8080/basket-info', {
                params: {
                    memberId: 1,
                    latitude: locationData.latitude, // Use latitude from Recoil state
                    longitude: locationData.longitude, // Use longitude from Recoil state
                },
            })
            .then((response) => {
                const basket = response.data.result;
                setBasketInfo(basket);
                console.log("장바구니 정보:", basket)
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
                                        onClick={() => {
                                            handleButtonClick();
                                            handleBasketInfo();
                                        }}
                                    >
                                        장바구니
                                    </p>
                                </li>
                                <ShoppingCarts open={showShoppingCart} onClose={() => setShowShoppingCart(false)} />


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
                                <UseCurrentLocation
                                    addressChecked={addressChecked}
                                    setAddressChecked={setAddressChecked}
                                />
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