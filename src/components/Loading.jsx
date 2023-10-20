import React from 'react'

export default function Loading() {
    return (
        <div className='flex items-center justify-center h-full mt-3'>
            <div
                style={{ borderTopColor: 'transparent' }}
                className='w-8 h-8 border-4 border-green-500 rounded-full animate-spin'
            ></div>
            <p className='ml-2 font-semibold text-gray-200'>잠시만 기다려 주세요...</p>
        </div>)
}
