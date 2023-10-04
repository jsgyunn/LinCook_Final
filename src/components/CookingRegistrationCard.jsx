import React, { useEffect, useState } from 'react';
import ChoiceButton from '../components/ChoiceButton';
import ExceptButton from './ExceptButton';
import { useRecoilValue } from 'recoil';
import { registrationDataState } from '../recoil/atoms';
import axios from 'axios';

export default function CookingRegistrationCard() {
    const registrationData = useRecoilValue(registrationDataState);
    const { description_1 } = registrationData;

    // 초기 상태 값을 빈 배열로 설정합니다.
    const [descriptionCard, SetdescriptionCard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .post('http://13.125.174.235:5000/', description_1)
            .then((response) => {
                SetdescriptionCard(response.data);
                setLoading(false);
                console.log('등록 데이터:', response.data);
            })
            .catch((error) => {
                console.error('데이터를 불러오는 중 에러 발생:', error);
                setLoading(false);
            });
    }, [description_1]); // description_1이 변경될 때 useEffect 실행

    return (
        <>
            <div className="bg-white">
                {Object.keys(descriptionCard).map((productName) => (
                    <div key={productName}>
                        <div className="bg-white border border-gray-200 border-2 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-3xl lg:px-1 lg:py-2 rounded-lg mt-5">
                            <h2 className="sr-only">descriptionCards</h2>
                            <div className="flex justify-between mb-2 items-center">
                                <span>
                                    <h2 className="font-bold text-xl ml-3">{productName}</h2>
                                </span>
                                <ExceptButton />
                            </div>

                            <div className="mb-4 h-0.5 bg-gray-200"></div>

                            <div className="flex overflow-x-auto">
                                {descriptionCard[productName].map((descriptionItem) => (
                                    <div key={descriptionItem._id} className="group flex-shrink-0 mr-6">
                                        <div className="w-40 h-40 bg-gray-200 rounded-lg overflow-hidden">
                                            <img
                                                src={descriptionItem._source.product_picture}
                                                alt="사진"
                                                className="w-full h-full object-cover object-center object-contain"
                                            />
                                        </div>
                                        <h3 className="mt-4 text-sm text-gray-700">{descriptionItem._source.product_name}</h3>
                                        <p className="mt-1 text-lg font-medium text-gray-900">
                                            {`${descriptionItem._source.after_discount_price.toLocaleString()} 원`}
                                        </p>
                                        <p className="flex justify-center">
                                            <ChoiceButton />
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
