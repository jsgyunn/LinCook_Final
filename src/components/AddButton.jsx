import React from 'react'
import add from '../assets/add.png'
export default function AddButton({ onClick }) {
    return (
        <button
            type="submit"
            className={`flex items-center justify-center gap-4 bg-gray-400 rounded-md px-4 py-2 text-white transition sm:w-auto hover:bg-green-700`}
            onClick={onClick}
        >
            <span className="w-4 h-4">
                <img src={add} alt="담기" />
            </span>
            <span className="text-lg font-bold">
                담기
            </span>
        </button>
    )
}
