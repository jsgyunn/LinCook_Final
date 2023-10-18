import React from 'react';
import 이지연 from '../assets/이지연.png'
import 정승균 from '../assets/정승균.png'
import 김범기 from '../assets/김범기.png'
import 이민재 from '../assets/이민재.png'

export default function TeamCard() {
    return (

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-left pb-12 ml-5">
                <h2 className="text-black font-bold text-3xl md:text-3xl lg:text-4xl font-heading">
                    함께한 사람들
                </h2>
                <h1 className="font-semi-bold md:text-lg text-black mt-4">
                    우리 팀은 협력의 힘과 다양성의 가치를 중요시 여기는 팀 입니다. <br />각기 다른 배경과 역할을 가진 우리 팀원들을 소개합니다.
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src="https://lh3.googleusercontent.com/fife/AK0iWDzhDRCZJOifawzSNNaI8sMKPPt2Gao2ESbnloJbBYVBnFc71NvC5OrW4yoSYEZ4XOM5zkqTVtwj_XYqP9rG7jz-kwpsDKI3qSULU9ANCnb6eyI_NspMFZPeAEykVHi9Zjcze6FmkqzuPxXylIFMu3KFDJY9J3oX2M3JyMbm4Cmj1nG4h9dUYkOKSkIavn7Hkj2peP-1dKEgO4WI3vrDu9BJL8AF4UtQMjl1nMxGdRpKOHKLonY00MiphVBFkixfM5-tilFn2ix4dP1dobprE1yLVWm7L0Lb8J45bF4vonI_xTFJnv5TtOeKWSmw1M26csyU7kXHU4Cj428zSb_a4g_WXrly4pNfRR5MWK76en-7vFC_jw5K01bRQvGajcZW9mYAAtEPMJSDfI-LVZtz4Qe73_OjcWOcD778NVBXWucuMxpftxwmVIZhUF0VcuonsoeingKiUIgkNZ1lEzV6lr-TvoQFugSLEUalKUuhXXeOMllJwuVqTRqhqwEghJF7iVvmd7OOTJYPOiS-PueLKKZMB21xM4ndKib7qaGhDwhuyErdckTl5lKCbcZXBB1xWZ0eFUHK7TBE9oB3_auLabbxS8y9MMbQuyzvw00LP3tRFY3pd1iJPDlAJ9vzFkxlVvnOOhKxsIXvTKJV8KGviN33bIoWi1VvxnZkYFI3kJvMY0vX2-lX4kFoMUiTDEfMEHVdV4vFxORi3_-6LQQw5OuH2_TCO8a2DJEjVqKYjUwqwYaPEEMg2xXK5sz28AwnqdC_nMZpa8BrvLoohzI8YSFXpedS_mOfbtiJTEEernenWCFwZHGD-QNS5QCF164rjFzgRITf8bY_8p7tGw5QX_Mgj8Cco-mvuU6oP_csyBnodZ9X6PENdM3vryQ3UIq13J5xGe0SZoyKbGN6CNBjgVUTqJzD1WDv6A7IRQilkR4OBYEpGm4jGYUV8znOy2eU2t6ElItKRuz9Romzly12Yi5e30PmqyBvmbcUgnRvFm-ByF4E8UGSMIbOzMD45PEk3ppmiZOTu8vOmwJrrwLADxBnx1-BhT9zc-0qoZp9URamm5_ViL97_7Jrk_XQ9TIa1DB_2tvRbGYcQJKVStA8eYF9OED4221ChPK4rOm8-_VTmJJZAuXvKH3tqJzwmeKwCbgnPVgcibqYvWtz_cE3di7l3LXwyAmVQYebiRPSGBAkdlhQb4VmT8CGeGzRtVg2uxIOOJqN-fjtqVYUAz_fHUYT7tI2RfQYNII1VOeaVWhCt9Ws_T2EbBK2FDej9MV6a10GJvGPLGFyjakXq7JwTuPiAqQ3WmZtsxUFcVBQ3K_mV89hCp4mcc2wS3HlyY2DCIG9646A_OVPbdIP7rlS5wOE4aDDfaZmBV65ml4tZlaiQZaGABeRmeNAe-bLjKklUknhiSPo-g7DaWyf5SUOPPH4NzF1Tq392R6QDh0AHzozyf3fLC2yxlY3sm_IIdraYLw3CdqCI6gYHTLuuhghhLtHM4iVESP1jQ8McZnEi19umCdUFN2BHzkyPkO1FcYrrQEQEMk1YJBN7_M_MTFz=w2880-h1466"
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">홍량택</p>
                        <p className="text-base text-gray-400 font-normal">海賊王におれはなる</p>
                        <p className="text-base text-gray-600 font-medium">프로젝트환경구축, Backend, DB설계</p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src={김범기}
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">김범기</p>
                        <p className="text-base text-gray-600 font-medium">
                            기획, UX/UI, Backend, data analysis
                        </p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src={이지연}
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">이지연</p>
                        <p className="text-base text-gray-600 font-medium">검색 엔진 구축, 데이터 분석</p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src={이민재}
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">이민재</p>
                        <p className="text-base text-gray-600 font-medium">데이터 파이프라인 구축, 데이터 적재</p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src={정승균}
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">정승균</p>
                        <p className="text-base text-gray-600 font-medium">Frontend, UX/UI</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
