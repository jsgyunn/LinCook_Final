import React from 'react'
import copy from '../assets/copy.png'

export default function CopyButton() {
    return (
        <button
            type="submit"
            className={`flex items-center justify-center gap-2 bg-white rounded-md px-1 py-1 text-gray-400 transition sm:w-auto hover:bg-gray-300`}
        >
            <span className="w-4 h-4">
                <img src={copy} alt="복사" />
            </span>
            <span className="text-lg font-medium">
                복사
            </span>
        </button>
    )
}
