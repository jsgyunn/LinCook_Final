import React, { useEffect, useMemo, useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { basketInfoState, cartItemState, locationState } from '../recoil/atoms';
import axios from 'axios';

export default function ShoppingCarts({ open, onClose }) {



    const [isOpen, setIsOpen] = useState(false);
    const [selectedBasketIndex, setSelectedBasketIndex] = useState(0);
    const [basketInfo, setBasketInfo] = useRecoilState(basketInfoState);
    const locationData = useRecoilValue(locationState);
    const [isLoading, setIsLoading] = useState(false);


    const toggleDialog = () => {
        setIsOpen(!isOpen);
        // 드롭다운을 닫을 때 selectedBasketIndex도 초기화합니다.
        setSelectedBasketIndex(0);
    };

    const cartItems = useRecoilValue(cartItemState);
    const setCartItemState = useSetRecoilState(cartItemState);

    const totalAmount = useMemo(() => {
        return cartItems.reduce((total, cartItem) => {
            return total + cartItem.productDto.sale_price;
        }, 0);
    }, [cartItems]);

    const removeFromCart = (martId) => {
        const updatedCartItems = cartItems.filter((item) => item.martDto.mart.id !== martId);
        setCartItemState(updatedCartItems);
    };

    const loadBasketData = () => {
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
                console.log("장바구니 정보:", basket);
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
    const basketData = basketInfoData.data;
    console.log("바스켓데이터:", basketData);

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
                                                <Dialog.Title
                                                    className="text-lg font-medium text-gray-900">
                                                    장바구니
                                                </Dialog.Title>







                                                <div>
                                                    <label htmlFor="HeadlineAct" className="block text-lg font-medium text-gray-900">
                                                        영상 제목
                                                    </label>
                                                    <select
                                                        name="HeadlineAct"
                                                        id="HeadlineAct"
                                                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-m"
                                                        value={basketData.length > 0 ? basketData[0].contentsDto.title : ""}
                                                    >
                                                        {basketData.map((basket, basketIndex) => (
                                                            <option key={basketIndex} value={basket.contentsDto.title}>
                                                                {basket.contentsDto.title}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>







                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={onClose}
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>










                                            {basketData.map((basket, basketIndex) => (
                                                <div key={basketIndex} className="mt-3">
                                                    <div
                                                        className={`flex items-center justify-between cursor-pointer`}
                                                        onClick={() => {
                                                            toggleDialog();
                                                            setSelectedBasketIndex(basketIndex);
                                                        }}
                                                    >
                                                        <h2 className="text-lg font-medium text-gray-900">
                                                            {basket.contentsDto.title}
                                                        </h2>
                                                        <div
                                                            className={`transform transition-transform duration-300 ${isOpen && basketIndex === selectedBasketIndex
                                                                ? 'rotate-180'
                                                                : ''
                                                                }`}
                                                        >
                                                            ▼
                                                        </div>
                                                    </div>

                                                    {isOpen && basketIndex === selectedBasketIndex && (
                                                        <div className="mt-8">
                                                            <div className="flow-root">
                                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                                    {basket.basketMartProductList.map((product, productIndex) => (
                                                                        <li key={productIndex} className="flex py-6">
                                                                            {product.basketProductDtoList.map((productItem, productItemIndex) => (
                                                                                <Fragment key={productItemIndex}>
                                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                                        <img
                                                                                            src={productItem.imgUrl}
                                                                                            alt={productItem.name}
                                                                                            className="h-full w-full object-cover object-center"
                                                                                        />
                                                                                    </div>
                                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                                        <div>
                                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                                <h3>
                                                                                                    <a href={productItem.name}>{productItem.name}</a>
                                                                                                </h3>
                                                                                                <p className="ml-4 font-medium text-xl">
                                                                                                    {`${productItem.salePrice.toLocaleString()}원`}
                                                                                                </p>
                                                                                            </div>
                                                                                            <p className="mt-1 text-sm text-gray-500">{productItem.capacity}</p>
                                                                                        </div>
                                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                                            <div className="flex">
                                                                                                <button
                                                                                                    type="button"
                                                                                                    className="font-medium text-red-600 hover:text-red-500"
                                                                                                    onClick={() =>
                                                                                                        removeFromCart(product.martDto.name)
                                                                                                    }
                                                                                                >
                                                                                                    빼기
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Fragment>
                                                                            ))}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>









                                            ))}
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>총 합계</p>
                                                <p>
                                                    {`${totalAmount.toLocaleString()}원`}
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
