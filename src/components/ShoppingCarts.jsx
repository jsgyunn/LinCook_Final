import React, { useEffect, useMemo, useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItemState } from '../recoil/atoms';

export default function ShoppingCarts({ open, onClose }) {
    const cartItems = useRecoilValue(cartItemState);
    console.log(cartItems);



    // Recoil의 useSetRecoilState 훅을 사용하여 상태를 업데이트합니다.
    const setCartItemState = useSetRecoilState(cartItemState);

    // 합계 계산을 위한 useMemo를 사용합니다.
    const totalAmount = useMemo(() => {
        // 장바구니에 담긴 모든 상품의 가격을 합산
        return cartItems.reduce((total, cartItem) => {
            return total + cartItem.productDto.sale_price * cartItem.quantity;
        }, 0); // 초기값을 0으로 설정
    }, [cartItems]);

    // 상품 수량을 관리할 상태
    const [productQuantities, setProductQuantities] = useState({});

    // 상품을 장바구니에 추가하는 함수
    const addToCart = (productId) => {
        // 이미 장바구니에 추가된 상품인지 확인
        const existingCartItem = cartItems.find((item) => item.productDto.id === productId);

        if (existingCartItem) {
            // 이미 추가된 상품이면 수량만 증가
            setCartItemState((prevCartItems) => {
                return prevCartItems.map((item) => {
                    if (item.productDto.id === productId) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });
            });

            // 상품 수량 상태도 업데이트
            setProductQuantities((prevQuantities) => ({
                ...prevQuantities,
                [productId]: (prevQuantities[productId] || 0) + 1,
            }));
        } else {
            // 새로운 상품을 추가
            const productToAdd = cartItems.find((item) => item.productDto.id === productId);
            if (productToAdd) {
                setCartItemState((prevCartItems) => [
                    ...prevCartItems,
                    {
                        ...productToAdd,
                        quantity: 1, // 처음으로 추가되는 경우 수량 1로 설정
                    },
                ]);

                // 상품 수량 상태도 업데이트
                setProductQuantities((prevQuantities) => ({
                    ...prevQuantities,
                    [productId]: 1,
                }));
            }
        }
    };

    // 상품을 장바구니에서 제거하는 함수
    const removeFromCart = (productId) => {
        // 장바구니에서 productId와 일치하는 상품을 찾습니다.
        const cartItemToRemove = cartItems.find((item) => item.productDto.id === productId);

        if (cartItemToRemove) {
            if (cartItemToRemove.quantity > 1) {
                // 수량이 1 이상일 때만 수량을 1씩 감소시킵니다.
                setCartItemState((prevCartItems) => {
                    return prevCartItems.map((item) => {
                        if (item.productDto.id === productId) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                            };
                        }
                        return item;
                    });
                });

                // 상품 수량 상태도 업데이트
                setProductQuantities((prevQuantities) => ({
                    ...prevQuantities,
                    [productId]: (prevQuantities[productId] || 0) - 1,
                }));
            } else {
                // 수량이 1일 때 상품을 삭제합니다.
                const updatedCartItems = cartItems.filter((item) => item.productDto.id !== productId);
                // Recoil의 useSetRecoilState를 사용하여 장바구니 상태를 업데이트합니다.
                setCartItemState(updatedCartItems);
                // 상품 수량 상태에서 해당 상품 제거
                setProductQuantities((prevQuantities) => {
                    const newQuantities = { ...prevQuantities };
                    delete newQuantities[productId];
                    return newQuantities;
                });
            }
        }
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
                                                                            <p className="ml-4 font-medium text-2xl">
                                                                                {`${cartItem.productDto.sale_price.toLocaleString()}원`}
                                                                            </p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">{cartItem.productDto.capacity}</p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <div className="flex">
                                                                            <button
                                                                                type="button"
                                                                                className="font-medium text-red-600 hover:text-red-500"
                                                                                onClick={() => removeFromCart(cartItem.productDto.id)}
                                                                            >
                                                                                빼기
                                                                            </button>
                                                                        </div>
                                                                        <div className="flex items-center">
                                                                            <button
                                                                                type="button"
                                                                                className="px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100"
                                                                                onClick={() => addToCart(cartItem.productDto.id)}
                                                                            >
                                                                                +
                                                                            </button>
                                                                            <span className="mx-2 text-gray-700">
                                                                                {productQuantities[cartItem.productDto.id] || 0}
                                                                            </span>
                                                                            <button
                                                                                type="button"
                                                                                className="px-2 py-1 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100"
                                                                                onClick={() => removeFromCart(cartItem.productDto.id)}
                                                                            >
                                                                                -
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="mt-2 text-sm text-gray-500">
                                                                        {`${cartItem.productDto.name} - ${cartItem.productDto.distance}km`}
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
    );
}
