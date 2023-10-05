import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputYoutubeLink2 from '../components/InputYoutubeLink2';
import CookingRegistrationCard from '../components/CookingRegistrationCard';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { registrationDataState, selectedProductsState } from '../recoil/atoms';
import { youtubeVideoIdState } from '../recoil/atoms';
import { useNavigate } from 'react-router-dom';


export default function CookingRegistration2() {

    const navigate = useNavigate(); // navigate 함수를 사용할 수 있도록 추가
    const youtubeVideoId = useRecoilValue(youtubeVideoIdState);
    const registrationData = useRecoilValue(registrationDataState);
    const selectedProducts = useRecoilValue(selectedProductsState);


    const { title, description_2 } = registrationData;
    const productIds = selectedProducts.map(product => product.product_id)
    const [uniqueID, setUniqueID] = useState("")




    console.log(registrationData.title);
    console.log(registrationData.description_2);



    const navigateToContentDetail = () => {
        axios
            .post('http://3.37.4.231:8080/create-contents', {
                member_id: 1,
                title: title,
                description: description_2,
                url: youtubeVideoId,
                name: "꽃게탕",
                ids: productIds, // ids 값을 요청 본문에 포함
            })
            .then((response) => {
                // 요청이 성공하면 처리
                console.log('요리 생성 요청 성공:', response.data);
                setUniqueID("유니크 아이디:", response.data)
                navigate('/contentdetail')
                // 필요한 처리 추가
            })
            .catch((error) => {
                console.error('요리 생성 요청 중 에러 발생:', error);
            });
    };

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {/* 이미지 */}
            <div className="lg:col-span-2 text-center overflow-auto flex justify-center items-start mt-5 bg-gray-300 ml-20 mr-10">
                <img
                    src="#"
                    alt="이미지 사진"
                    style={{ width: '200px', height: '250px' }}
                />
            </div>

            <div className="h-94 w-200 lg:col-span-2 text-center overflow-auto flex justify-center items-start mt-1 ml-10">
                <CookingRegistrationCard />
            </div>

            <div className="absolute top-1/5 right-0 mr-6 rounded-lg bg-gray-100 shadow-2xl h-screen">
                {/* 나머지 코드는 그대로 유지 */}
                <div className="flex justify-center items-start mt-5">
                    <div className="bg-gray-100">
                        <button
                            onClick={navigateToContentDetail}
                            className="rounded-xl bg-green-600 px-28 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
                            type="submit">
                            요리 생성하기
                        </button>
                    </div>
                </div>

                <div className="mt-3">
                    <InputYoutubeLink2 />
                </div>

                <div className="flex justify-center mt-3">
                    <img
                        className="rounded-lg w-72 h-48"
                        src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
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
                        {registrationData.description_2 ? (
                            // description 내용을 '\n'로 분할하여 각 항목을 보여줌
                            registrationData.description_2.split('\n').map((item, index) => (
                                <p key={index} className="w-72 h-8 break-words font-medium">
                                    {item.trim()} {/* 각 항목 앞뒤 공백 제거 */}
                                </p>
                            ))
                        ) : (
                            <p>설명이 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
