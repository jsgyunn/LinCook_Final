import React from 'react'
import Youtube from '../api/Youtube'
import { useRecoilValue } from 'recoil';
import { contentDetailProductState } from '../recoil/atoms';



export default function ContentDetailHeader() {

    const contentDetailProduct = useRecoilValue(contentDetailProductState);

    return (
        <div className="flex flex-col w-3/4 gap-5 p-4 mx-auto bg-white select-none sm:p-6 sm:h-72 rounded-2xl sm:flex-row">
            <div className="bg-white h-64 sm:h-full sm:w-96 rounded-xl flex items-center justify-center mr-7 ml-1">
                <Youtube />
            </div>

            <div className="flex flex-col flex-1 gap-5 sm:p-4">
                <div className="flex flex-col flex-1 gap-4">
                    <div className="w-full bg-white  h-5 rounded-2xl flex items-center justify-center break-words text-2xl">
                        {contentDetailProduct.contentsDto.title}
                    </div>

                    <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center break-words overflow-y-auto mt-5 text-center">
                        {contentDetailProduct.contentsDto.description}
                    </div>
                </div>
            </div>
        </div>
    )
}
