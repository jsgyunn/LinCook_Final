import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { constSelector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { basketInfoState, cartItemState, locationState } from '../recoil/atoms';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import dotenv from "dotenv";

export default function ShoppingCarts({ open, onClose }) {
    const [basketInfo, setBasketInfo] = useRecoilState(basketInfoState);
    const locationData = useRecoilValue(locationState);
    const [isLoading, setIsLoading] = useState(false);
    const setCartItemState = useSetRecoilState(cartItemState);
    const [selectedBasketIndex, setSelectedBasketIndex] = useState(0);
    const [selectedVideoTitle, setSelectedVideoTitle] = useState('');
    // Deleted basketIds 배열을 선언
    const deletedBasketIds = [];


    // dotenv.config()

    const handleVideoTitleChange = (event) => {
        const selectedTitle = event.target.value;
        setSelectedVideoTitle(selectedTitle);
    };


    const loadBasketData = () => {
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
                // console.log("바스켓:", basket)
                const initialVideoTitle = basket.data[0].contentsDto.title;
                console.log(initialVideoTitle)
                setSelectedVideoTitle(initialVideoTitle)
                setBasketInfo(basket);
                // console.log("인포:", basketInfo)
                setIsLoading(true);
            })
            .catch((error) => {
                console.error('장바구니 정보 불러오는 중 에러 발생:', error);
            });
    };


    useEffect(() => {
        loadBasketData();
    }, []);

    const basketInfoData = useRecoilValue(basketInfoState);
    const basketData = basketInfoData.data || [];

    const kakaoShare = () => {
        // 현재 선택된 영상 제목
        const selectedTitle = selectedVideoTitle;
        // 선택된 영상 제목으로 해당 정보 가져오기
        const selectedBasket = basketData.find((basket) => basket.contentsDto.title === selectedTitle);
        selectedBasket.basketMartProductList.forEach((mart) => {
            // console.log(mart.martDto.name)
            mart.basketProductDtoList.forEach((element) => {
                // console.log(element)
                const name = element.name
                const price = element.salePrice
                const capacity = element.capacity
                console.log('여기를 보세용')
            })

        })

        if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
                kakao.init("1c3cec44f2e4537ecfc7b9f23f6fc3a0");
            }

            // 공유하기 기능 구현
            kakao.Link.sendDefault({
                objectType: "feed",
                content: {
                    title: "title",
                    imageUrl: "imageUrl",
                    link: {
                        mobileWebUrl: "route",
                        webUrl: "route",
                    },
                },
                buttons: [
                    {
                        title: "title",
                        link: {
                            mobileWebUrl: "route",
                            webUrl: "route",
                        },
                    },
                ],
            });
        }
    };

    const handleRemoveProduct = (productIdToRemove) => {
        // 현재 선택한 비디오 제목
        const selectedBasket = basketData.find((basket) => basket.contentsDto.title === selectedVideoTitle);

        if (selectedBasket) {
            // 삭제된 basketId를 저장할 배열 생성
            const deletedBasketIds = [];

            // 선택한 바구니에서 상품을 찾아서 삭제
            const updatedBasketMartProductList = selectedBasket.basketMartProductList.map((product) => {
                // 상품의 productId가 삭제하려는 productIdToRemove와 일치하지 않으면 유지
                const updatedBasketProductDtoList = product.basketProductDtoList.filter(
                    (basketProduct) => {
                        if (basketProduct.productId === productIdToRemove) {
                            // 삭제된 상품의 basketId를 배열에 추가
                            deletedBasketIds.push(basketProduct.basketId);
                            return false; // 이 항목은 유지하지 않음
                        }
                        return true; // 이 항목은 유지
                    }
                );

                return { ...product, basketProductDtoList: updatedBasketProductDtoList };
            });

            // 삭제된 basketId 배열을 출력
            console.log('삭제된 basketIds:', deletedBasketIds);

            // 새로운 basketData 배열 생성
            const updatedBasketData = basketData.map((basket) => {
                if (basket.contentsDto.title === selectedVideoTitle) {
                    return { ...basket, basketMartProductList: updatedBasketMartProductList };
                }
                return basket;
            });

            // 상태 업데이트
            setBasketInfo((prevBasketInfo) => ({
                ...prevBasketInfo,
                data: updatedBasketData,
            }));

            console.log(deletedBasketIds[0])

            axios
                .post('http://3.37.4.231:8080/delete-basket', {
                    memberId: 1,
                    basketId: deletedBasketIds[0],
                })
                .then((response) => {
                    console.log("성공:", response.data);
                })
                .catch((error) => {
                    console.log("서버 오류:", error)
                })
            // handleBasketDelet(deletedBasketIds);
        }
    };


    const renderBasketItemsForSelectedVideo = () => {

        console.log("basketData: ", basketData);
        console.log("selectedVideoTitle: ", selectedVideoTitle);

        const selectedBasket = basketData.find((basket) => basket.contentsDto.title === selectedVideoTitle);

        console.log("selectedBasket: ", selectedBasket);

        if (!selectedBasket) {
            return <p className='mt-28 text-center font-semibold'>재료를 추가해주세요.</p>;
        } else {
            const basketItemsForSelectedVideo = selectedBasket.basketMartProductList;

            return (
                <div>
                    {basketItemsForSelectedVideo.map((product, index) => (
                        <div key={`${product.martDto.name}-${index}`}>
                            <h2 className="text-xl font-semibold mt-6">{product.martDto.name}</h2>
                            <ul role="list" className="mt-3 -my-6 divide-y divide-gray-200">
                                {product.basketProductDtoList.map((basketProduct, innerIndex) => (
                                    <li key={`${basketProduct.name}-${innerIndex}`} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={basketProduct.imgUrl}
                                                alt={basketProduct.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <Link to={basketProduct.name}>{basketProduct.name}</Link>
                                                    </h3>
                                                    <p className="ml-4 font-medium text-xl">
                                                        {`${basketProduct.salePrice.toLocaleString()}원`}
                                                    </p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{basketProduct.capacity}</p>
                                            </div>
                                            <div className="mt-1 text-sm text-gray-500">
                                                <p>{product.martDto.name}</p>
                                                <p>{product.martDto.distance} km</p>
                                            </div>
                                        </div>
                                        <button
                                            className="ml-4 text-red-500 font-medium"
                                            onClick={() => handleRemoveProduct(basketProduct.productId)}
                                        >
                                            빼기
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                    }
                </div >
            );
        };
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">장바구니</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={onClose}
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Close panel</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-3">
                                                <label htmlFor="videoTitle" className="block text-lg font-medium text-gray-700 text-center">
                                                    영상 제목 선택
                                                </label>
                                                <select
                                                    id="videoTitle"
                                                    name="videoTitle"
                                                    value={selectedVideoTitle}
                                                    onChange={handleVideoTitleChange}
                                                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm font-semibold"
                                                >
                                                    {basketData.map((basket) => (
                                                        <option key={basket.contentsDto.title} value={basket.contentsDto.title}>
                                                            {basket.contentsDto.title}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {renderBasketItemsForSelectedVideo()}
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>총 합계</p>
                                                <p>
                                                    금액
                                                </p>
                                            </div>
                                            <div className="mt-6">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-500"
                                                    onClick={() => kakaoShare()}
                                                >
                                                    공유하기
                                                </a>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                {/* 여기에 추가적인 정보 표시 가능 */}
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}