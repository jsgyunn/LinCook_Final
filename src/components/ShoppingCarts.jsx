import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { basketInfoState, cartItemState, locationState } from '../recoil/atoms';
import axios from 'axios';

export default function ShoppingCarts({ open, onClose }) {
    const [basketInfo, setBasketInfo] = useRecoilState(basketInfoState);
    const locationData = useRecoilValue(locationState);
    const [isLoading, setIsLoading] = useState(false);
    const setCartItemState = useSetRecoilState(cartItemState);
    const [selectedBasketIndex, setSelectedBasketIndex] = useState(0);
    const [selectedVideoTitle, setSelectedVideoTitle] = useState('');

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
                setBasketInfo(basket);
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

    const handleRemoveProduct = (productToRemove) => {
        const selectedBasket = basketData.find((basket) => basket.contentsDto.title === selectedVideoTitle);

        if (selectedBasket) {
            const updatedBasketItems = selectedBasket.basketMartProductList.filter(
                (product) => product !== productToRemove
            );

            setBasketInfo((prevBasketInfo) => ({
                ...prevBasketInfo,
                data: prevBasketInfo.data.map((basket) =>
                    basket.contentsDto.title === selectedVideoTitle
                        ? { ...basket, basketMartProductList: updatedBasketItems }
                        : basket
                ),
            }));
        }
    };

    const renderBasketItemsForSelectedVideo = () => {
        const selectedBasket = basketData.find((basket) => basket.contentsDto.title === selectedVideoTitle);

        if (!selectedBasket) {
            return <p className='mt-28 text-center font-semibold'>잠시만 기다려주세요 ...</p>;
        }

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
                                                    <a href={basketProduct.name}>{basketProduct.name}</a>
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
                                        onClick={() => handleRemoveProduct(product)}
                                    >
                                        빼기
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    if (!isLoading) {
        return <div>loading ...</div>;
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
                                                    href="#"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-500"
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
