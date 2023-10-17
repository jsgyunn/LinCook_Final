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
                            src="https://w7.pngwing.com/pngs/113/90/png-transparent-one-piece-monkey-d-luffy-illustration-monkey-d-luffy-brook-vinsmoke-sanji-goku-chibi-one-piece-food-hand-cartoon.png"
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">홍량택</p>
                        <p className="text-base text-gray-400 font-normal">Backend</p>
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
                        <p className="text-base text-gray-400 font-normal">
                            기획, UX/UI, backend, data analysis
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
                        <p className="text-base text-gray-400 font-normal">검색 엔진 구축, 데이터 분석</p>
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
                        <p className="text-base text-gray-400 font-normal">데이터 파이프라인 구축, 데이터 적재</p>
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
                        <p className="text-base text-gray-400 font-normal">Frontend, UX/UI</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
