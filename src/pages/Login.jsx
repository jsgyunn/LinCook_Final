import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, refreshTokenState, memberIdState } from "../recoil/persist";
import { useForm } from "react-hook-form";
import logo from '../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { isloginState } from "../recoil/atoms";
import Swal from "sweetalert2";
import loginPng from "../assets/loginPng.png"


export default function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors } } = useForm();
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);
    const [memberId, setMemberId] = useRecoilState(memberIdState)
    const [isLogin, setIsLogin] = useRecoilState(isloginState);


    const onSubmit = (data) => {
        const Email = getValues('email');
        const Password = getValues('password');

        // console.log(Email)
        // console.log(Password)

        axios
            .post('http://3.37.4.231:8080/api/auth/login', {
                // .post('http://192.168.100.31:8080/api/auth/login', {
                email: Email,
                password: Password,
            })
            .then((response) => {
                // 요청이 성공하면 처리
                // console.log('로그인 성공:');
                // console.log("토큰:", response)
                setAccessToken(response.headers['authorization']);
                setMemberId(response.data.memberId);
                // setRefreshToken(response.headers['Set-cookie']);

                setIsLogin(true); // 사용자 로그인 상태 변경
                navigate('/');
            })
            .catch((error) => {
                // console.error('로그인 에러 발생:', error);
                Swal.fire({
                    position: 'top',
                    icon: 'warning',
                    title: '아이디, 비밀번호를 확인해주세요.',
                    confirmButtonText: '확인',
                    confirmButtonColor: '#16A34A',
                    customClass: {
                        title: 'text-lg',
                        popup: 'w-90'
                    }
                })

            });
    }

    return (
        <div className="flex justify-center">
            <div className="w-1/2 flex max-w-4xl">
                <img
                    alt="Welcome"
                    src={loginPng}
                    className="h-auto w-full "
                />
            </div>

            {/* 폼 부분 */}
            <div className="w-1/2 p-10 flex flex-col justify-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm" style={{ marginTop: '20px', marginLeft: '90px' }}>

                    <h2 className="mt-10 text-left text-4xl font-bold leading-9 tracking-tight text-black">
                        로그인
                    </h2>


                </div>

                <div className="w-full max-w-md mx-auto mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                {errors.email && <small className="text-red-600" role="alert">{errors.email.message}</small>}
                            </div>
                        </div>

                        {/* 비밀번호 입력 부분 */}
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    비밀번호
                                </label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-green-600 hover:text-green-500">
                                        비밀번호 찾기
                                    </a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="비밀번호"
                                    {...register('password', {
                                        required: '비밀번호는 필수 입력입니다.',
                                        pattern: {
                                            value: 6,
                                            // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            message: '비밀번호 형식에 맞지 않습니다.'
                                        }
                                    })}
                                    aria-invalid={isSubmitted ? (errors.password ? "true" : "false") : undefined}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 h-11"
                                />
                                {errors.password && <small className="text-red-600" role="alert">{errors.password.message}</small>}
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
                    {/* <div className="mt-6">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-green-600 mt-4"
                        >
                            구글로 시작하기
                        </button>
                    </div> */}

                    {/* 회원 가입 링크 */}
                    <p className="mt-5 text-center text-sm text-gray-500">
                        계정이 없으신가요?{' '}
                        <Link to="/signup" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                            가입하기
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
