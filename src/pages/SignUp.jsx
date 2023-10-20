import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function SignUp() {
    const navigate = useNavigate();
    const { control, handleSubmit, register, setValue, getValues, formState: { errors } } = useForm();
    const [signupInfo, setSignupInfo] = useState();




    const onSubmit = async (data) => {
        const Email = data.email;
        const Password = data.password;
        const Name = data.name;
        const Gender = data.gender;

        // console.log(Email);
        // console.log(Password);
        // console.log(Name);
        // console.log(Gender);

        try {
            const response = await axios.post('http://3.37.4.231:8080/api/auth/signup', {
                email: Email,
                password: Password,
                address: null,
                role: "USER",
                gender: Gender,
                name: Name,
                latitude: 37.57002838826,
                longitude: 126.97962084516
            });

            // console.log('회원가입 성공:', response.data.result);
            setSignupInfo(response.data.result);
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: '회원가입 성공!',
                confirmButtonText: '확인',
                confirmButtonColor: '#16A34A',
                customClass: {
                    title: 'text-lg',
                    popup: 'w-90'
                }
            })
            navigate('/login');
        } catch (error) {
            // console.error('회원가입 에러 발생:', error);
            // console.log("이미 등록된 회원입니다.");
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: '이미 등록된 회원입니다.',
                confirmButtonText: '확인',
                confirmButtonColor: '#16A34A',
                customClass: {
                    title: 'text-lg',
                    popup: 'w-90'
                }
            })

        }
    };

    // const onSubmit = async (data) => {
    //     // 사용자가 입력한 정보를 변수에 담음
    //     const Email = getValues('email');
    //     const Password = getValues('password');
    //     const Name = getValues('name');
    //     const Gender = getValues('gender');

    //     console.log("이메일:", Email)
    //     console.log(Password)
    //     console.log(Name)
    //     console.log(Gender)


    //     axios
    //         .post('http://3.37.4.231:8080/auth/signup', {
    //             email: Email,
    //             password: Password,
    //             address: null,
    //             gender: Gender,
    //             name: Name,
    //             latitude: 37.57002838826,
    //             longitude: 126.97962084516
    //         })
    //         .then((response) => {
    //             // 요청이 성공하면 처리
    //             console.log('회원가입 성공:', response.data.result);
    //             setSignupInfo(response.data.result);
    //             alert('회원가입 성공!')
    //             navigate('/login');
    //         })
    //         .catch((error) => {
    //             console.error('회원가입 에러 발생:', error);
    //             console.log("이미 등록된 회원입니다.")
    //             alert("이미 등록된 회원입니다.")
    //         });
    // };


    return (
        <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
            <div className="w-full py-8">
                <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
                    <h2 className="text-center text-3xl font-bold tracking-wide text-gray-800">회원가입</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="my-8 text-sm">
                        <div className="flex flex-col my-4">
                            <label htmlFor="name" className="text-gray-700">이름</label>
                            <Controller
                                name="name"
                                control={control}
                                rules={{
                                    required: '이름을 입력하세요', // 필수 필드
                                }}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="text"
                                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 w-full"
                                            placeholder="이름을 입력해주세요."
                                        />
                                        {errors.name && (
                                            <p className="text-red-600">{errors.name.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="email" className="text-gray-700">이메일</label>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: '이메일을 입력하세요', // 필수 필드
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: '유효한 이메일 주소를 입력하세요',
                                    },
                                }}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="email"
                                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 w-full"
                                            placeholder="email@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-600">{errors.email.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        {/* 비밀번호, 비밀번호 확인 필드 유효성 검사 추가 */}
                        <div className="flex flex-col my-4">
                            <label htmlFor="password" className="text-gray-700">비밀번호</label>
                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: '비밀번호를 입력하세요',
                                    minLength: {
                                        value: 6,
                                        message: '비밀번호는 최소 6자 이상이어야 합니다',
                                    },
                                }}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="password"
                                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 w-full"
                                            placeholder="6자리 이상 입력해주세요."
                                        />
                                        {errors.password && (
                                            <p className="text-red-600">{errors.password.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="flex flex-col my-4">
                            <label htmlFor="passwordConfirm" className="text-gray-700">비밀번호 확인</label>
                            <Controller
                                name="passwordConfirm"
                                control={control}
                                rules={{
                                    required: '비밀번호 확인을 입력하세요',
                                    validate: (value) => value === getValues('password') || '비밀번호가 일치하지 않습니다',
                                }}
                                render={({ field }) => (
                                    <div>
                                        <input
                                            {...field}
                                            type="password"
                                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 w-full"
                                            placeholder="비밀번호를 확인해주세요."
                                        />
                                        {errors.passwordConfirm && (
                                            <p className="text-red-600">{errors.passwordConfirm.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="flex flex-col mt-6">
                            <label className="text-gray-700">성별</label>
                            <div className="flex mt-2">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="male"
                                        {...register("gender")}
                                        className="form-radio text-blue-600 h-5 w-5"
                                    />
                                    <span className="ml-2">남자</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input
                                        type="radio"
                                        value="female"
                                        {...register("gender")}
                                        className="form-radio text-blue-600 h-5 w-5"
                                    />
                                    <span className="ml-2">여자</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-9 flex items-center justify-center space-x-4">
                            <button className="bg-green-600 hover:bg-green-700 rounded-lg px-20 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase w-full" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}