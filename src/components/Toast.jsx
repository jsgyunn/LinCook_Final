import React, { useState, useEffect } from 'react';
import logo2 from '../assets/logo2.png';
import copy from '../assets/copy.png';

export default function Toast() {
    const [open, setOpen] = useState(false);
    let timer;

    const openToast = () => {
        if (open) return;
        setOpen(true);

        clearTimeout(timer);

        timer = setTimeout(() => {
            setOpen(false);
        }, 3000);
    };

    const closeToast = () => {
        setOpen(false);
    };

    useEffect(() => {
        // 여기에서 Alpine.js 초기화 로직을 구현할 필요가 없습니다.
        // Alpine.js는 React와 함께 사용할 필요가 없습니다.
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center mb-7">
            {open && (
                <button
                    type="button"
                    onClick={closeToast}
                    className="fixed right-4 top-20 z-50 rounded-md bg-green-500 px-1 py-1 text-white transition hover:bg-green-600 text-sm"
                    style={{ transitionDuration: '300ms' }}
                >
                    <div className=" flex items-center space-x-2">
                        <span className="text-3xl">
                            <i className="bx bx-check"></i>
                        </span>
                        <p className="font-bold">
                            복사 성공! <br /> 이제 Crtl + V 키를 눌러 붙여넣기 해 보세요.
                        </p>
                    </div>
                </button>
            )}

            <button
                type="button"
                className="rounded-md bg-green-500 px-4 py-2 text-2xl font-bold text-white transition"
            >
                <div className="flex items-center space-x-4">
                    <img
                        className="w-16 h-16"
                        src={logo2}
                        alt="로고2"
                    />
                    <span>
                        우측 버튼을 눌러 링크를 복사해 영상 설명에 추가해 보세요 🙌 <br />
                        <p className="text-base font-medium">
                            링크를 타고 영상을 보는 많은 구독자들이 링크를 통해 쉽게 재료를 구매할 수 있어요.
                        </p>
                    </span>
                    <button
                        type="button"
                        onClick={openToast}
                        className="ml-2 rounded-md bg-white px-4 py-2 text-gray-700 transition hover:bg-gray-200 text-base font-semibold"
                    >
                        ✔️ 링크 복사하기
                    </button>
                </div>
            </button>
        </div>
    );
}
