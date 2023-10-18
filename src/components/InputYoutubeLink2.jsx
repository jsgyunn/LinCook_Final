import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { youtubeLinkState } from '../recoil/atoms'

export default function InputYoutubeLink2() {

    const youtubeLink = useRecoilValue(youtubeLinkState)

    return (
        <footer className="bg-gray-100 rounded-xl">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md">

                    <form className="mt-6">
                        <div className="relative max-w-lg">
                            <label className="sr-only" htmlFor="url"> URL </label>

                            <input
                                className="w-full rounded-full border-white bg-gray-200 p-4 pe-30 text-sm font-medium"
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
