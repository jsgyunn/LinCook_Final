import React from 'react'

export default function ContentDetailHeader() {
    return (
        <div className="flex flex-col w-3/4 gap-5 p-4 mx-auto bg-white select-none sm:p-6 sm:h-72 rounded-2xl sm:flex-row">
            <div className="bg-gray-200 h-64 sm:h-full sm:w-96 rounded-xl flex items-center justify-center">
                요리 영상 썸네일
            </div>

            <div className="flex flex-col flex-1 gap-5 sm:p-4">
                <div className="flex flex-col flex-1 gap-4">
                    <div className="w-full bg-gray-200  h-16 rounded-2xl flex items-center justify-center">
                        영상 제목
                    </div>

                    <div className="w-full h-32 bg-gray-200 rounded-2xl flex items-center justify-center">
                        설명
                    </div>
                </div>
            </div>
        </div>
    )
}
