import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from './Alert'
import registration from '../assets/registrationlogo.png'
import CookingRegistration2 from '../pages/CookingRegistration2'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { youtubeVideoIdState } from '../recoil/atoms'
import { useNavigate } from 'react-router-dom'
import { registrationDataState } from '../recoil/atoms'




export default function MainHeader() {

    const navigate = useNavigate();

    const [showAlert, setShowAlert] = useState(false);
    //클라이언트가 입력한 유튜브 링크 저장
    const [youtubeLink, setYoutubeLink] = useState('');
    //유튜브 동영상 ID 값 저장
    const [youtubeVideoId, setYoutubeVideoId] = useRecoilState(youtubeVideoIdState);
    //서버에서 받은 동영상 데이터 저장

    const [registrationData, setRegistrationData] = useRecoilState(registrationDataState);

    const [videoData, setVideoData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setYoutubeLink(e.target.value);

    };

    const navigateToCookingRegistration2 = () => {
        navigate.push('/cookingregistration2')
    }

    //유튜브 동영상 링크에서 동영상 ID 추출 -> 해당 ID를 사용하여 서버에 GET 요청
    const extractVideoId = () => {
        const regex = /(?:https:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
        const match = youtubeLink.match(regex);
        if (match && match[1]) {
            const videoId = match[1];
            setLoading(true);

            axios.get(`http://52.79.82.90:3000/${videoId}`)
                .then((response) => {
                    console.log(response.data)
                    setRegistrationData(response.data)
                    setYoutubeVideoId(videoId)
                    // console.log(youtubeVideoId)
                    setLoading(false);
                    navigate('/cookingregistration2');
                })
                .catch((error) => {
                    console.log('서버 요청 오류: ', error);
                    //등록된 유튜브 링크일 경우, 경고창 표시
                    setShowAlert(true);
                    setLoading(false);
                })
        }
    }




    return (
        <section
            className="relative bg-[url(https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2934&q=80)] 
            bg-cover bg-center bg-no-repeat "
        >
            <div
                className="absolute inset-0 backdrop-blur-md bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l backdrop-opacity-10"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >


                <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Click the Link!

                        <strong className="block font-extrabold text-green-600">
                            간편한 장보기, 링쿡하세요.
                        </strong>
                    </h1>

                    <p className="mt-6 sm:mt-8 text-base sm:text-xl/relaxed font-bold">
                        링쿡은 지금 보고 있는 요리 영상에 필요한 재료들을 빠르게 찾아주고, <br /> 편리한 서비스로 당신의 요리 경험을 더욱 완벽하게 만들어드립니다!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
                        <input
                            value={youtubeLink}
                            type="url"
                            placeholder="유튜브 링크를 입력해주세요!"
                            className="w-full sm:w-96 rounded-md bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-green-500"
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="group flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-white transition sm:w-auto hover:bg-green-700"
                            onClick={extractVideoId}
                            disabled={loading} //로딩 중에 버튼 비활성화
                        >
                            <span className="text-sm font-medium"> 적용 </span>
                        </button>
                        {loading && <p>데이터 불러오는 중..</p>}
                        {showAlert && <Alert />}
                    </div>

                    <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5 mt-5 mx-auto">
                        <img src={registration} className="w-full max-w-xs m-auto md:max-w-xl" />
                    </div>
                </div>
            </div>
        </section>

    )
}