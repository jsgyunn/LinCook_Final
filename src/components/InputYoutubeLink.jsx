import React from 'react'
import { Link } from 'react-router-dom'

export default function InputYoutubeLink() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md">
                    <strong
                        className="block text-center text-xl font-bold text-gray-900 sm:text-4xl"
                    >
                        등록할 요리 유튜브 링크를 <br />입력하세요.
                    </strong>

                    <form className="mt-6">
                        <div className="relative max-w-lg">
                            <label className="sr-only" htmlFor="url"> URL </label>

                            <input
                                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                                id="url"
                                type="url"
                                placeholder="https://www.youtube.com/watch?v=HzOBdBzah_8"
                            />
                            <Link to='/cookingregistration2'>
                                <button
                                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-green-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700"
                                >
                                    적용하기
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}
