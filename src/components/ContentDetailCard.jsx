import React, { useEffect, useState } from 'react';
import CopyButton from './CopyButton';
import AddButton from './AddButton';
import location2 from '../assets/location2.png';
import phone from '../assets/phone.png';
import user from '../assets/User.png';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { contentDetailProductState, cartItemState, addressState, isloginState } from '../recoil/atoms';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { locationState } from '../recoil/atoms'; // im
import FindMap from './FindMap';

export default function ContentDetailCard() {
    const params = useParams();
    // const contentDetailProduct = useRecoilValue(contentDetailProductState);

    const loginInfo = useRecoilState(isloginState);

    const addressName = useRecoilValue(addressState)
    // console.log("주소값:", addressName)
    // console.log("이름값:", addressName.address_name)
    const locationData = useRecoilValue(locationState);
    // console.log(locationData)
    const contentDetailProduct = useRecoilValue(contentDetailProductState);
    const contentID = contentDetailProduct.contentsDto.id;

    // console.log("ewqejnqwjkenjqwknejkwqnjk:", contentID)

    const [selectedTab, setSelectedTab] = useState('전체'); // 초기 탭을 '전체'로 설정
    const setCartItem = useSetRecoilState(cartItemState); // cartItemState 업데이트 함수
    const [shoppingData, setShoppingData] = useState([]);
    // const navigate = useNavigate();

    const cartItems = useRecoilValue(cartItemState);
    // const productID = cartItems.martDto.mart.productId;
    // const martID = cartItems.martDto.mart.id;
    console.log("담기 버튼 누르면 저장되는 상품, 마트 정보:", cartItems);




    const handleTabClick = (tabName) => {
        setSelectedTab(tabName); // 탭 클릭 시 선택된 탭을 변경
    };




    // 장바구니에 상품 추가하는 함수
    const addToCart = (productDto, martDto) => {
        // 현재 장바구니 상태를 Recoil 상태로 업데이트
        setCartItem((prevCart) => [...prevCart, { productDto, martDto }]);
        console.log("상품이 장바구니에 추가되었습니다:", productDto, "마트 정보:", martDto);

        const productID = martDto.productId;
        const martID = martDto.mart.id;
        axios
            .post('http://3.37.4.231:8080/create-basket', {
                // .post('http://localhost:8080/create-basket', {
                memberId: 1,
                contentsId: contentID,
                productId: productID,
                martId: martID,
            })
            .then((response) => {
                // 요청이 성공하면 처리
                console.log('장바구니 요청 성공:', response.data);
                setShoppingData("쇼핑 데이터:", response.data)
                alert("상품이 담겼습니다.")
                // navigate(0);
            })
            .catch((error) => {
                console.error('장바구니 요청 중 에러 발생:', error);
                alert("이미 상품이 담겼습니다.")
            });
    };

    return (
        <>
            {/* 탭 버튼 */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => handleTabClick('전체')} // '전체' 탭을 클릭하면 모든 정보 표시
                    className={`${selectedTab === '전체' ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
                        } px-4 py-2 rounded-md mx-2`}
                >
                    전체
                </button>
                {contentDetailProduct.data.map((data, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(data.productDto.name)} // 각 상품명을 클릭하면 해당 상품 정보 표시
                        className={`${selectedTab === data.productDto.name ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
                            } px-4 py-2 rounded-md mx-2`}
                    >
                        {data.productDto.name}
                    </button>
                ))}
            </div>

            <div className="bg-white">
                {contentDetailProduct.data.map((data, index) => (
                    <div key={index} className={`border border-solid rounded-lg border-gray-300 w-4/5 mx-auto mt-10 ${selectedTab === '전체' || selectedTab === data.productDto.name ? 'block' : 'hidden'}`}>
                        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                            <div className="flex flex-col sm:flex-row items-center justify-between">
                                <div className="w-full sm:w-1/3">
                                    <img
                                        className="w-full h-auto"
                                        src={data.productDto.img_url}
                                        alt="상품"
                                    />
                                </div>
                                <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:w-2/3">
                                    <p className="text-lg lg:text-xl">
                                        {data.productDto.name} <br />
                                        {data.productDto.capacity}
                                    </p>
                                    <div className="mt-4 flex justify-center sm:justify-between">
                                        <button
                                            type="submit"
                                            className="group flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
                                        >
                                            <span className="text-sm font-medium">자세히 보기</span>
                                        </button>
                                    </div>
                                    <div className="mt-4 flex justify-center sm:justify-between">
                                        <button
                                            type="button"
                                            className="group flex items-center justify-center gap-2 rounded-md bg-gray-300 px-5 py-3 text-black transition"
                                        >
                                            <span className="text-sm font-medium">평균 판매가</span>
                                        </button>
                                        <p className="text-xl font-medium">
                                            {`${data.productDto.sale_price.toLocaleString()}원`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">contentDetailProduct</h2>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                                {data.martDtoList.map((martDtoList) => (
                                    <div key={martDtoList.id} className="group border border-solid border-black rounded-lg p-4">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 text-xl font-bold flex justify-between">
                                            <div>
                                                {martDtoList.mart.name}
                                                <div className="text-sm font-normal text-green-500 mt-1">
                                                    {`현 위치로부터 ${martDtoList.mart.distance}km`}
                                                </div>
                                            </div>
                                            <div className="mt-5 text-green-500">
                                                {`${martDtoList.price.toLocaleString()}원`}
                                            </div>
                                        </div>

                                        <h3 className="mt-4 text-sm text-gray-700 flex items-center">
                                            <img
                                                className="h-4 w-4 mr-1"
                                                src={location2}
                                                alt="위치 로고"
                                            />
                                            <p className="">
                                                {martDtoList.mart.address}
                                            </p>
                                            <div className="ml-auto">
                                                <a
                                                    className="text-gray-500 underline text-sm"
                                                    // onClick={handleMapNavigation}
                                                    href={`http://map.naver.com/index.nhn?slng=${locationData.longitude}&slat=${locationData.latitude}&stext=${encodeURIComponent(addressName.address_name)}&elng=${martDtoList.longitude}&elat=${martDtoList.latitude}&pathType=0&showMap=true&etext=${encodeURIComponent(martDtoList.mart.name)}&menu=route&pathType=3`}
                                                    target="_blank"
                                                >
                                                    길찾기
                                                </a>
                                            </div>
                                        </h3>

                                        <h3 className="mt-4 text-sm text-gray-700 flex items-center">
                                            <img
                                                className="h-4 w-4 mr-1"
                                                src={phone}
                                                alt="폰 로고"
                                            />
                                            {martDtoList.mart.mart_call}
                                            <div className="ml-auto">
                                                <CopyButton />
                                            </div>
                                        </h3>

                                        <h3 className="mt-4 text-sm text-gray-700 flex items-center">
                                            <img
                                                className="h-4 w-4 mr-1"
                                                src={user}
                                                alt="폰 로고"
                                            />
                                            {`지금까지 32명이 담았습니다.`}
                                            <div className="ml-auto">
                                                <AddButton
                                                    onClick={loginInfo[0] ? addToCart(data.productDto, martDtoList) : () => alert("로그인이 필요합니다.")}
                                                />
                                            </div>
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div >
                ))
                }
            </div >
        </>
    );
}








