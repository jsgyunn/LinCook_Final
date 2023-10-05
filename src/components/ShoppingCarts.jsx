import React, { useEffect, useMemo } from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { basketInfoState, cartItemState, locationState } from '../recoil/atoms';
import axios from 'axios';


export default function ShoppingCarts({ open, onClose }) {

    //Header 컴포넌트에서 통신함
    const basketInfo = useRecoilValue(basketInfoState);
    console.log("바스켓인포:", basketInfo)

    const cartItems = useRecoilValue(cartItemState);
    console.log("이건 뭐니?", cartItems);

    // Recoil의 useSetRecoilState 훅을 사용하여 상태를 업데이트합니다.
    const setCartItemState = useSetRecoilState(cartItemState);


    // 합계 계산을 위한 useMemo를 사용합니다.
    const totalAmount = useMemo(() => {
        // 장바구니에 담긴 모든 상품의 가격을 합산
        return cartItems.reduce((total, cartItem) => {
            return total + cartItem.productDto.sale_price;
        }, 0); // 초기값을 0으로 설정
    }, [cartItems]);

    // 상품을 장바구니에서 제거하는 함수
    const removeFromCart = (martId) => {
        // 장바구니에서 productId와 일치하는 상품을 제거합니다.
        const updatedCartItems = cartItems.filter((item) => item.martDto.mart.id !== martId);

        // Recoil의 useSetRecoilState를 사용하여 장바구니 상태를 업데이트합니다.
        setCartItemState(updatedCartItems);
    };


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
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-3">
                                                <h2 className="text-lg font-medium text-gray-900 text-center">요리 제목</h2> {/* "요리 제목" 추가 */}
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">






                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cartItems.map((cartItem, index) => (
                                                            <li key={index} className="flex py-6">

                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img
                                                                        src={cartItem.productDto.img_url}
                                                                        alt={cartItem.productDto.name}
                                                                        className="h-full w-full object-cover object-center"
                                                                    />
                                                                </div>
                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                <a href={cartItem.productDto.name}>{cartItem.productDto.name}</a>
                                                                            </h3>
                                                                            <p className="ml-4 font-medium text-xl">
                                                                                {`${cartItem.martDto.price.toLocaleString()}원`}
                                                                            </p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">{cartItem.productDto.capacity}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <div className="flex">
                                                                            <button
                                                                                type="button"
                                                                                className="font-medium text-red-600 hover:text-red-500"
                                                                                onClick={() =>
                                                                                    removeFromCart(cartItem.martDto.mart.id)
                                                                                }
                                                                            >
                                                                                빼기
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>










                                                </div>
                                            </div>




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
    )
}