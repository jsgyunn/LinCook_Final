import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from '../assets/logo.png';
import LoginAlert from "../components/LoginAlert";

export default function Login() {
    const { register, handleSubmit, formState: { isSubmitting, isSubmitted, errors } } = useForm();
    const [alerted, setAlerted] = useState(false);

    return (
        <div className="flex">
            {/* 이미지 부분 */}
            <div className="w-1/2 flex justify-end">
                <img
                    alt="Welcome"
                    src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    className="h-screen w-full object-cover"

                />
            </div>

            {/* 폼 부분 */}
            <div className="w-1/2 p-10 flex flex-col justify-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <a href="/">
                        <img
                            className="mx-auto h-20 w-auto"
                            src={logo}
                            alt="LinCook"
                        />
                    </a>
                    <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-green-500">
                        LinCook
                    </h2>
                    {alerted && <LoginAlert />}
                </div>

                <div className="w-full max-w-md mx-auto mt-5">
                    <form onSubmit={handleSubmit(async (data, event) => {
                        event.preventDefault()
                        setAlerted(true);
                        await new Promise((r) => setTimeout(r, 1_000));
                    })}>
                        {/* 이메일 입력 부분 */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                이메일
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="이메일"
                                    {...register('email', {
                                        required: '이메일은 필수 입력입니다.',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: '이메일 형식에 맞지 않습니다.'
                                        }
                                    })}
                                    aria-invalid={isSubmitted ? (errors.email ? "true" : "false") : undefined}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 h-11"
                                />
                                {errors.email && <small role="alert">{errors.email.message}</small>}
                            </div>
                        </div>

                        {/* 비밀번호 입력 부분 */}
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    비밀번호
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-green-600 hover:text-green-500">
                                        비밀번호 찾기
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="비밀번호"
                                    {...register('password', {
                                        required: '비밀번호는 필수 입력입니다.',
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            message: '비밀번호 형식에 맞지 않습니다.'
                                        }
                                    })}
                                    aria-invalid={isSubmitted ? (errors.password ? "true" : "false") : undefined}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 h-11"
                                />
                                {errors.password && <small role="alert">{errors.password.message}</small>}
                            </div>
                        </div>

                        {/* 로그인 버튼 */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                disabled={isSubmitting}
                            >
                                로그인
                            </button>
                        </div>
                    </form>

                    {/* Or 구분선 */}
                    <div className="flex items-center justify-between mt-6">
                        <div className="w-full h-[1px] bg-gray-300"></div>
                        <span className="text-sm uppercase mx-4 text-gray-400">Or</span>
                        <div className="w-full h-[1px] bg-gray-300"></div>
                    </div>

                    {/* 구글로 시작하기 버튼 */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-600 mt-4"
                        >
                            구글로 시작하기
                        </button>
                    </div>

                    {/* 회원 가입 링크 */}
                    <p className="mt-10 text-center text-sm text-gray-500">
                        계정이 없으신가요?{' '}
                        <a href="/signup" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                            가입하기
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
