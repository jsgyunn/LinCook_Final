import React from 'react'

export default function FindMap({ address }) {

    const handleFindMap = () => {
        // 마트 주소 정보를 사용하여 네이버 지도 URL을 생성합니다.
        const naverMapURL = `https://map.naver.com/p/search/route?query=${encodeURIComponent(address)}`;

        // 새 탭에서 네이버 지도로 이동합니다.
        window.open(naverMapURL, '_blank');
    };




    return (
        <button
            type="submit"
            className={`flex items-center justify-center gap-2 bg-white rounded-md px-1 py-1 text-gray-400 transition sm:w-auto hover:bg-gray-300`}
            onClick={handleFindMap}
        >
            <span className="w-3 h-3 ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>

            </span>
            <span className=" text-base font-medium">
                길찾기
            </span>
        </button>
    )
}

