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
import { memberIdState } from '../recoil/persist';
import { handleCopyClipBoard } from '../common/ClipBoard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


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
    const memberid = useRecoilValue(memberIdState)

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


    const copyPhoneNumber = (phoneNumber) => {
        handleCopyClipBoard(phoneNumber);
        toast.success("전화번호 복사 완료.")

    };

    // 장바구니에 상품 추가하는 함수
    const addToCart = (simpleProductDto, martDto) => {
        // 현재 장바구니 상태를 Recoil 상태로 업데이트
        setCartItem((prevCart) => [...prevCart, { simpleProductDto, martDto }]);
        console.log("상품이 장바구니에 추가되었습니다:", simpleProductDto, "마트 정보:", martDto);

        const productID = martDto.productId;
        const martID = martDto.mart.id;
        console.log("멤버 id:", memberid)
        // console.log("멤버 아이딩:", memberid[0])
        axios
            .post('http://3.37.4.231:8080/create-basket', {
                memberId: memberid,
                contentsId: contentID,
                productId: productID,
                martId: martID,
            })
            .then((response) => {
                // 요청이 성공하면 처리
                console.log('장바구니 요청 성공:', response.data);
                setShoppingData("쇼핑 데이터:", response.data)
                toast.success("상품이 담겼습니다."); // 토스트 메시지 사용
                // navigate(0);
            })
            .catch((error) => {
                console.error('장바구니 요청 중 에러 발생:', error);
                toast.error("이미 상품이 담겼습니다."); // 토스트 메시지 사용
            });
    };

    return (
        <>
            {/* 탭 버튼 */}
            <div className="flex flex-wrap justify-center mt-4"> {/* 변경된 부분 */}
                <button
                    onClick={() => handleTabClick('전체')}
                    className={`${selectedTab === '전체' ? 'bg-green-500 text-white' : 'bg-white text-gray-400 border-2'
                        } px-4 py-2 rounded-md mx-2 my-2`}
                >
                    전체
                </button>
                {contentDetailProduct.data.map((data, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(data.simpleProductDto.name)}
                        className={`${selectedTab === data.simpleProductDto.name ? 'bg-green-500 text-white' : 'bg-white text-gray-400 border-2'
                            } px-3 py-2 rounded-md mx-2 my-2`}
                    >
                        {data.simpleProductDto.name}
                    </button>
                ))}
            </div>

            <div className="bg-white">
                {contentDetailProduct.data.map((data, index) => (
                    <div key={index} className={`border border-solid rounded-lg border-gray-300 w-4/5 mx-auto mt-10 ${selectedTab === '전체' || selectedTab === data.simpleProductDto.name ? 'block' : 'hidden'}`}>
                        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                            <div className="flex flex-col sm:flex-row items-start justify-between w-full">
                                <div className="w-full sm:w-1/3">
                                    <img
                                        className="w-full sm:w-40 sm:h-40"
                                        src={data.simpleProductDto.img_url}
                                        alt="상품"
                                    />
                                </div>

                                <div className="flex justify-between items-start sm:items-end w-full sm:w-2/3">
                                    <div className="w-full">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col justify-start">
                                                <div className="font-bold">
                                                    {data.simpleProductDto.name}
                                                </div>
                                                <div className="text-gray-500">
                                                    {data.simpleProductDto.capacity}
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-end">
                                                <div className="flex flex-col justify-end">
                                                    <br></br>
                                                    <br></br>
                                                    <br></br></div>
                                                <div className="h-1/2 flex flex-col justify-end">
                                                    <div
                                                        className="group flex items-center justify-center gap-2 rounded-md bg-white px-4 py-1 text-black transition
                                                        border-2 border-gray-300"
                                                    >
                                                        <span className="text-sm font-medium">
                                                            평균 판매가
                                                        </span>
                                                    </div>
                                                    <p className=" ml-3 text-2xl font-bold text-green-500">
                                                        {`${data.simpleProductDto.avg_price.toLocaleString()}원`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">contentDetailProduct</h2>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                                {data.martDtoList.map((martDtoList) => (
                                    <div key={martDtoList.id} className="group border-2 border-gray-200 rounded-lg p-4">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 text-xl font-bold flex justify-between">
                                            <div className=" flex-1">
                                                {martDtoList.mart.name}
                                                <div className="text-sm font-normal text-green-500 mt-1">
                                                    {`현 위치로부터 ${martDtoList.mart.distance}km`}
                                                </div>
                                            </div>
                                            <div className="mt-5 text-green-500 flex-initial">
                                                {`${martDtoList.price.toLocaleString()}원`}
                                            </div>
                                        </div>
                                        <h3 className="mt-4 text-sm text-gray-700 flex items-center">
                                            <img
                                                className="h-4 w-4 mr-1"
                                                src={location2}
                                                alt="위치 로고"
                                            />
                                            <div className="flex flex-1">
                                                {martDtoList.mart.address}
                                            </div>
                                            <div className="flex-initial">
                                                <a
                                                    className="text-gray-500 underline text-sm "
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
                                                <CopyButton
                                                    onClick={() => copyPhoneNumber(martDtoList.mart.mart_call)}
                                                />
                                            </div>
                                        </h3>

                                        <h3 className="mt-4 text-sm text-gray-700 flex items-center">
                                            <div className="ml-auto">
                                                <AddButton
                                                    onClick={() => (loginInfo[0] ? addToCart(data.simpleProductDto, martDtoList) :
                                                        Swal.fire({
                                                            position: 'top',
                                                            title: '로그인이 필요합니다.',
                                                            confirmButtonText: '확인',
                                                            confirmButtonColor: '#16A34A',
                                                            footer: '<a href="https://jsgyunn.github.io/LinCook_Final/login">로그인 하시겠습니까?</a>',
                                                            customClass: {
                                                                title: 'text-lg',
                                                                popup: 'w-90'
                                                            }
                                                        })
                                                    )}
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
            <ToastContainer
                autoClose={1500}
                hideProgressBar
                pauseOnHover={false} />
        </>
    );
}