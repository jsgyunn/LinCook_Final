import React from 'react'
import { Link } from 'react-router-dom'
import InputYoutubeLink from '../components/InputYoutubeLink'

export default function CookingRegistration1() {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ">
            <div className="h-96 w-200 px-64 pt-80 pb-96 ml-24 rounded-lg bg-gray-50 lg:col-span-2 text-center font-extrabold">
                이미지 사진
            </div>
            <div className="h-30 mr-6 rounded-lg bg-gray-100">
                <div className='bg-white'>
                    <button
                        className="
                        rounded-full bg-green-600 px-40 py-4 text-sm font-medium text-white transition hover:bg-green-700"
                    >
                        적용하기
                    </button>
                </div>
                <InputYoutubeLink />
                ㅎㅇㅎㅇㅎㅇ
            </div>
        </div>
    )
}