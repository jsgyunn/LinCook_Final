import React, { useState } from 'react';

export default function ChoiceButton() {
    const [isExcluded, setIsExcluded] = useState(false);

    const handleClick = () => {
        setIsExcluded(!isExcluded);
    };

    return (
        <button
            type="submit"
            className={`group flex items-center justify-center gap-2 rounded-md ${isExcluded ? 'bg-gray-400' : 'bg-green-500'} px-14 py-3 text-white transition sm:w-auto hover:bg-green-600`}
            onClick={handleClick}
        >
            <span className={`text-sm font-medium`}>
                {isExcluded ? '제외하기' : '추가하기'}
            </span>
        </button>
    );
}
