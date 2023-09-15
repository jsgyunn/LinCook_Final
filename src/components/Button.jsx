import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
    return (
        <>
            <div>
                <Link
                    className="group flex items-center justify-between gap-2 rounded-lg border border-green-600 bg-green-500 px-3 py-2 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                    to="/"
                >
                    <span
                        className="font-medium text-white transition-colors group-hover:text-black group-active:text-indigo-500 text-sm"
                    >
                        요리 생성하기
                    </span>

                    <span
                        className="shrink-0 rounded-full border border-current bg-white p-1 text-green-500 group-active:text-green-500 w-6 h-6 flex items-center justify-center"
                    >
                        <svg
                            className="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                </Link>
            </div>
            {/* Border */}

            <div>
                <a
                    className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
                    href="/download"
                >
                    <span className="font-medium transition-colors group-hover:text-white">
                        Find out more
                    </span>

                    <span
                        className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
                    >
                        <svg
                            className="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </>
    )
}



