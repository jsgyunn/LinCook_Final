import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import Loading from './Loading'
import registration from '../assets/registrationlogo.png';
import CookingRegistration2 from '../pages/CookingRegistration2';
import axios from 'axios';
import { useRecoilState, } from 'recoil';
import { isloginState, youtubeVideoIdState, youtubeLinkState } from '../recoil/atoms';
import { useNavigate } from 'react-router-dom';
import { registrationDataState } from '../recoil/atoms';
import InputYoutubeLink2 from './InputYoutubeLink2';
import Swal from 'sweetalert2';
import mainPage from "../assets/mainPage.png"
import main from 'os-browserify';
import logo2 from "../assets/logo2.png"
import mainContent from "../assets/mainContent.png"
import mainContent2 from "../assets/mainContent2.png"
import mainPng3 from "../assets/mainPng3.png"

export default function MainHeader() {
    const navigate = useNavigate();

    const loginInfo = useRecoilState(isloginState);

    const [showAlert, setShowAlert] = useState(false);

    // 클라이언트가 입력한 유튜브 링크 저장
    const [youtubeLink, setYoutubeLink] = useRecoilState(youtubeLinkState);

    //메인 카드에 중복된 콘텐츠 검사
    const [duplicateId, setDuplicateId] = useState("");

    // 유튜브 동영상 ID 값 저장
    const [youtubeVideoId, setYoutubeVideoId] = useRecoilState(youtubeVideoIdState);

    // 서버에서 받은 동영상 데이터 저장
    const [registrationData, setRegistrationData] = useRecoilState(registrationDataState);

    const [videoData, setVideoData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setYoutubeLink(e.target.value);
    };

    // 유튜브 동영상 링크에서 동영상 ID 추출 -> 해당 ID를 사용하여 서버에 GET 요청
    const extractVideoId = () => {
        const regex = /(?:https:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
        const match = youtubeLink.match(regex);
        if (match && match[1]) {
            const videoId = match[1];
            setLoading(true);

            axios
                .get(`http://52.79.82.90:3000/${videoId}`)
                .then((response) => {
                    console.log(response.data);
                    setRegistrationData(response.data);
                    setYoutubeVideoId(videoId);
                    setLoading(false);
                    navigate('/cookingregistration2');
                })
                .catch((error) => {
                    console.log('서버 요청 오류: ', error);
                    // 등록된 유튜브 링크일 경우, 경고창 표시
                    setDuplicateId(error.response.data.contentsId)
                    setShowAlert(true);
                    setLoading(false);
                });
            setShowAlert(false);
        } else {
            Swal.fire({
                position: 'top',
                title: '올바른 주소가 아닙니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#16A34A',
                customClass: {
                    title: 'text-lg',
                    popup: 'w-90'
                }
            })
        }
    };

    return (
        <section
            style={{
                backgroundImage: `url(${mainPage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* <div
                className="absolute inset-0 backdrop-blur-md bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l backdrop-opacity-10"
            ></div> */}

            <div
                className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:items-center lg:px-8"
            >
                <div className="w-full text-left ltr:sm:text-left rtl:sm:text-right mt-12">
                    <img className="w-20 h-20" src={logo2}
                        alt="사진" />

                    <h1 className="text-3xl font-medium sm:text-4xl text-white">
                        지금 보고있는 요리
                        <strong className="block font-medium text-white mt-3">
                            재료 준비는
                            <span className="text-gray-200 font-bold"> 링쿡</span>
                            으로 쉽게!
                        </strong>
                    </h1>

                    <p className="sm:mt-40 text-base sm:text-xl/relaxed font-bold text-white">
                        혹시 요리 유튜버이신가요?🧑‍🍳 <br />
                        영상 링크만 입력하면 1분만에 링쿡 등록 완료!
                    </p>

                    <div className="mt-3 mb-5 flex flex-wrap items-center">
                        <input
                            value={youtubeLink}
                            type="url"
                            placeholder="유튜브 링크를 입력 후 '적용' 버튼 클릭!"
                            className="w-full sm:max-w-sm rounded-2xl bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-green-500 text-lg"
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className={`w-full flex items-center justify-center gap-4 rounded-md bg-white px-1 py-2 text-green-400 transition sm:max-w-sm mt-3
                            ${loading ? 'pointer-events-none' : 'hover:bg-gray-300'}`}

                            onClick={loginInfo[0] ? extractVideoId : () => {
                                Swal.fire({
                                    position: 'top',
                                    title: '로그인이 필요합니다.',
                                    confirmButtonText: '확인',
                                    confirmButtonColor: '#16A34A',
                                    footer: '<a href="/LinCook_Final/login">로그인 하시겠습니까?</a>',
                                    customClass: {
                                        title: 'text-lg',
                                        popup: 'w-90'
                                    }
                                });
                            }
                            }
                            disabled={loading} // 로딩 중에 버튼 비활성화
                        >
                            <span className="text-xl font-semibold">재료 찾기</span>
                        </button>
                        {loading && <Loading />}
                        {showAlert && <Alert duId={duplicateId} />}
                    </div>
                </div>

                <div className="w-full ml-1">
                    <img className=" max-w-full w-full h-auto"
                        src={mainPng3}
                        alt="메인 사진"
                    />
                </div>

            </div>
        </section >
    );
}