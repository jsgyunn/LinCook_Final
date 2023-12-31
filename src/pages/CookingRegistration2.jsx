import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputYoutubeLink2 from '../components/InputYoutubeLink2';
import CookingRegistrationCard from '../components/CookingRegistrationCard';
import axios from 'axios';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { locationState, registrationDataState, selectedProductsState } from '../recoil/atoms';
import { youtubeVideoIdState } from '../recoil/atoms';
import { useNavigate } from 'react-router-dom';
import { memberIdState } from '../recoil/persist';
import Swal from 'sweetalert2';
import cookPng from "../assets/cookPng.png"


export default function CookingRegistration2() {

    const navigate = useNavigate(); // navigate 함수를 사용할 수 있도록 추가
    const youtubeVideoId = useRecoilValue(youtubeVideoIdState);
    const registrationData = useRecoilValue(registrationDataState);
    const selectedProducts = useRecoilValue(selectedProductsState);

    const { title, description_2 } = registrationData;
    const productIds = selectedProducts.map(product => product.product_id)
    const [uniqueID, setUniqueID] = useState("")
    const locationData = useRecoilValue(locationState);
    const memberid = useRecoilState(memberIdState)
    console.log("멤버 아이디:", memberid[0])

    console.log(registrationData.title);
    console.log(registrationData.description_2);


    useEffect(() => {
        // 새로고침을 감지하는 코드 추가
        // navigate("/");
    }, [locationData])


    const resetSelectedProducts = useResetRecoilState(selectedProductsState)


    const navigateToContentDetail = () => {
        if (selectedProducts.length === 0) {
            Swal.fire({
                position: 'top',
                title: '재료를 선택해주세요.',
                confirmButtonText: '확인',
                confirmButtonColor: '#16A34A',
                customClass: {
                    title: 'text-lg',
                    popup: 'w-90'
                }
            })

        } else {
            axios
                .post('http://3.37.4.231:8080/create-contents', {
                    // .post('http://192.168.100.31:8080/create-contents', {
                    memberId: memberid[0],
                    // memberId: 1,
                    title: title,
                    description: description_2,
                    url: youtubeVideoId,
                    ids: productIds, // ids 값을 요청 본문에 포함
                })
                .then((response) => {
                    console.log(response);
                    // 요청이 성공하면 처리
                    console.log('요리 생성 요청 성공:', response.data);
                    // setUniqueID("유니크 아이디:", response.data)
                    navigate('/contentdetail/' + response.data.result.id)
                    resetSelectedProducts()
                })
                .catch((error) => {
                    console.error('요리 생성 요청 중 에러 발생:', error);
                });
        }
    };



    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {/* 이미지 */}
            <div className="lg:col-span-2 text-center overflow-auto flex justify-center items-start mt-5 bg-gray-300 ml-20 mr-10">
                <img
                    src={cookPng}
                    alt="이미지 사진"
                />
            </div>

            <div className="h-94 w-200 lg:col-span-2 text-center overflow-auto flex justify-center items-start mt-1 ml-10">
                <CookingRegistrationCard />
            </div>

            <div className="absolute top-1/5 right-0 mr-6 rounded-lg bg-gray-100 shadow-2xl h-screen">
                {/* 나머지 코드는 그대로 유지 */}
                <div className="flex justify-center items-start mt-5">
                    <div className="bg-gray-100 ml-6 mr-6">
                        <button
                            onClick={navigateToContentDetail}
                            className="rounded-xl bg-green-600 px-36 py-4 text-xl font-semibold text-white transition hover:bg-green-700"
                            type="submit">
                            요리 생성하기
                        </button>
                    </div>
                </div>

                {/* <div className="mt-3">
                    <InputYoutubeLink2 />
                </div> */}

                <div className="flex justify-center mt-7">
                    <img
                        className="rounded-lg w-96"
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

                <div className="flex justify-left mt-5 ml-4 text-lg font-semibold bg-gray-100 text-gray-500">
                    {/* 📄설명 <br /> */}

                    [ 재료 ]
                </div>

                <div className="flex justify-center bg-gray-100">
                    <div className="text-center text-gray-400">
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
