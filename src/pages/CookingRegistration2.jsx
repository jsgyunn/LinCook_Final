import React from 'react';
import { Link } from 'react-router-dom';
import InputYoutubeLink2 from '../components/InputYoutubeLink2';
import CookingRegistrationCard from '../components/CookingRegistrationCard';
import registrationlogo from '../assets/registrationlogo.png';


export default function CookingRegistration2() {
    const cardCount = 3; // 반복할 컴포넌트의 개수s









    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {/* 이미지 */}
            <div className='lg:col-span-2 text-center overflow-auto flex justify-center items-start mt-5 bg-gray-300 ml-20 mr-10'>
                <img
                    src="#"
                    alt="이미지 사진"
                    style={{ width: '200px', height: '250px' }}
                />
            </div>

            {/* CookingRegistrationCard 컴포넌트 반복 렌더링 */}
            {Array.from({ length: cardCount }, (_, index) => (
                <div
                    key={index}
                    className='h-94 w-200 lg:col-span-2 text-center overflow-auto flex justify-center items-start mt-1 ml-10'
                >

                    <CookingRegistrationCard />
                </div>
            ))}



            <div className="absolute top-1/4 right-0 mr-6 h-full rounded-lg bg-gray-100 shadow-2xl">
                {/* 나머지 코드는 그대로 유지 */}
                <div className="flex justify-center items-start mt-5">
                    <div className="bg-gray-100">
                        <Link to='/contentdetail'>
                            <button className="rounded-xl bg-green-600 px-28 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
                                요리 생성하기
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='mt-3'>
                    <InputYoutubeLink2 />
                </div>
                <div className="flex justify-left mt-3 text-lg font-semibold">
                    📄설명
                </div>
                <div className="mb-3 h-0.5 bg-gray-200"></div>
            </div>
        </div>
    );
}
