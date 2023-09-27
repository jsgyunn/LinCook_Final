import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputYoutubeLink2 from '../components/InputYoutubeLink2';
import CookingRegistrationCard from '../components/CookingRegistrationCard';
import axios from 'axios'
import { useRecoilValue } from 'recoil'
import { registrationDataState } from '../recoil/atoms'
import { youtubeVideoIdState } from '../recoil/atoms';
import { useNavigate } from 'react-router-dom'



export default function CookingRegistration2() {

    const registrationData = useRecoilValue(registrationDataState);
    // console.log(registrationData.description_2)

    const youtubeVideoIdState = useRecoilValue(youtubeVideoIdState);
    // console.log(youtubeVideoIdState)






    const cardCount = 2; // 반복할 컴포넌트의 개수s

    const youtube = [
        {
            id: 1,
            name: '물 끓이는 시간보다 만드는 시간이 더 빨라요~ 90초 볶음라면!',
            href: 'https://www.youtube.com/watch?v=78AQ-ten9lE',
            imageSrc: 'https://img.youtube.com/vi/8O7odQbvqWA/maxresdefault.jpg',
            imageAlt: '백종원이 요리비책',
            description: `삼겹살 300g, 통마늘 8알(50g),
            청양고추 3개(20g),
            대파 2대(200g),
            물 1/3컵(60g),
            진간장 3큰술(30g),
            설탕 1.5큰술(15g),
            굵은 고춧가루 1큰술(5g),
            고운 고춧가루 1큰술(5g),
            참기름 1/2큰술 (4g),
            맛소금 적당량,
            후춧가루 적당량,
            깨소금 적당량`,
        }
    ]

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



            <div className="absolute top-1/5 right-0 mr-6 rounded-lg bg-gray-100 shadow-2xl h-screen">
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

                <div className="flex justify-center mt-3">
                    <img
                        className="rounded-lg w-72 h-48"
                        src={`https://img.youtube.com/vi/${youtubeVideoIdState}/maxresdefault.jpg`}
                        alt="#"
                    />
                </div>

                <div className="flex justify-center mt-3">
                    <div className="text-center">
                        <p className=" w-72 h-20 break-words font-semibold overflow-y-auto">
                            {registrationData.title}
                        </p>
                    </div>
                </div>
                <div className="mt-1 h-0.5 bg-gray-200"></div>

                <div className="flex justify-left mt-5 text-lg font-semibold">
                    📄설명 <br />

                    [재료]
                </div>


                <div className="flex justify-center mt-3">
                    <div className="text-center">
                        {/* description 내용을 '\n'로 분할하여 각 항목을 보여줌 */}
                        {registrationData.description_2.split('\n').map((item, index) => (
                            <p key={index} className="w-72 h-8 break-words font-medium">
                                {item.trim()} {/* 각 항목 앞뒤 공백 제거 */}
                            </p>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
