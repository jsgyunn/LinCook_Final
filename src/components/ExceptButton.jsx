import React from 'react'
import deleteoutlined from '../assets/deleteoutlined.png'

export default function ExceptButton() {
    return (
        <button
            type="submit"
            className={`flex items-center justify-center gap-2 bg-gray-400 rounded-md px-7 py-2 text-white transition sm:w-auto hover:bg-green-700`}
        >
            <span className="w-6 h-6">
                <img src={deleteoutlined} alt="삭제" />
            </span>
            <span className="text-lg font-bold">
                재료에서 제외하기
            </span>
        </button>
    )
}
