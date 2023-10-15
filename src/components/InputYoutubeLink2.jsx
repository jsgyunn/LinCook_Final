import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { youtubeLinkState } from '../recoil/atoms'

export default function InputYoutubeLink2() {

    const youtubeLink = useRecoilValue(youtubeLinkState)

    return (
        <footer className="bg-gray-100 rounded-xl">
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
                                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-30 text-sm font-medium"
                                id="url"
                                type="url"
                                placeholder="https://www.youtube.com/"
                                value={youtubeLink}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
}
