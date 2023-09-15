import React from 'react'
import { Link } from 'react-router-dom'
import InputYoutubeLink2 from '../components/InputYoutubeLink2'
import CookingRegistrationCard from '../components/CookingRegistrationCard'




export default function CookingRegistration2() {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {/* <div className="h-96 w-200 px-64 pt-80 pb-96 ml-24 rounded-lg bg-gray-200 lg:col-span-2 text-center overflow-auto "> */}
            <div className='h-96 w-200 lg:col-span-2 text-center overflow-auto flex justify-center items-start mt-5'>
                <CookingRegistrationCard />
            </div>

            <div className='h-96 w-200 lg:col-span-2 text-center overflow-auto flex justify-center items-start mt-5'>
                <CookingRegistrationCard />
            </div>




            <div className="fixed top-1/2 right-0 transform -translate-y-1/2 h-30 mr-6 rounded-lg bg-gray-200 shadow-2xl">
                <div className="flex justify-center items-start mt-5">
                    <div class="bg-gray-100">
                        <Link to='/contentdetail'>
                            <button className="rounded-lg bg-green-600 px-28 py-4 text-sm font-medium text-white transition hover:bg-green-700">
                                요리 생성하기
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='mt-20'>
                    <InputYoutubeLink2 />
                </div>
            </div>
        </div >

    )
}
