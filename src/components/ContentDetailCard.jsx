import React, { useState } from 'react';
import CopyButton from './CopyButton';
import AddButton from './AddButton';
import location2 from '../assets/location2.png';
import phone from '../assets/phone.png';
import user from '../assets/User.png';
import { useRecoilValue } from 'recoil';
import { contentDetailProductState } from '../recoil/atoms';

export default function ContentDetailCard() {
    const contentDetailProduct = useRecoilValue(contentDetailProductState);

    return (
        <div className="bg-white">
            {contentDetailProduct.data.map((data, index) => (
                <div key={index} className="border border-solid rounded-lg border-gray-300 w-4/5 mx-auto mt-10">
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
                                    <p>{`${data.productDto.sale_price}원`}</p>
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
                                                {`집으로부터 ${martDtoList.mart.distance}km`}
                                            </div>
                                        </div>
                                        <div className="mt-5 text-green-500">
                                            {`${martDtoList.price}원`}
                                        </div>
                                    </div>

                                    <h3 className="mt-4 text-sm text-gray-700 flex items-center">
                                        <img
                                            className="h-4 w-4 mr-1"
                                            src={location2}
                                            alt="위치 로고"
                                        />
                                        {martDtoList.mart.address}
                                        <div className="ml-auto">
                                            <CopyButton />
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
                                            <AddButton />
                                        </div>
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>





                </div>
            ))}
        </div>
    );
}
