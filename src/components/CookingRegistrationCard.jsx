import React, { useEffect, useState } from 'react'
import ChoiceButton from '../components/ChoiceButton';
import ExceptButton from './ExceptButton';
import { useRecoilValue } from 'recoil';
import { registrationDataState } from '../recoil/atoms'
import axios from 'axios';


export default function CookingRegistrationCard() {

    const registrationData = useRecoilValue(registrationDataState);

    const { description_1 } = registrationData;
    const [descriptionCard, SetdescriptionCard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.post('http://13.125.174.235:5000/',
            description_1
        )
            .then((response) => {
                SetdescriptionCard(response.data);
                setLoading(false);
                console.log(response.data);
            })
            .catch((error) => {
                console.log('데이터를 불러오는 중 에러 발생:', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className="bg-white">
                <div className="bg-white border border-gray-200 border-2 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-3xl lg:px-1 lg:py-2 rounded-lg">
                    <h2 className="sr-only">descriptionCards</h2>
                    <div className="flex justify-between mb-2">
                        <div className="flex">
                            {/* <div className="mr-auto">
                                <span className="font-bold">
                                    {ingredients[0].name}</span> <br />
                                <span>재료 수량</span>
                            </div> */}
                        </div>
                        <span>
                            <ExceptButton />
                        </span>
                    </div>
                    <div className="mb-4 h-0.5 bg-gray-200"></div>
                    <div className="flex overflow-x-auto">
                        {descriptionCard.map((descriptionCard) => (
                            <a key={descriptionCard._source.product_id} className="group flex-shrink-0 mr-6">
                                <div className="w-40 h-40 bg-gray-200 rounded-lg overflow-hidden">
                                    <img
                                        src={descriptionCard._source.product_picture}
                                        alt="사진"
                                        className="w-full h-full object-cover object-center object-contain" // 이미지 크기 및 표시 설정
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{descriptionCard._source.product_name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">
                                    {`${descriptionCard._source.after_discount_price} 원`}
                                </p>
                                <p className='flex justify-center'>
                                    <ChoiceButton />
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}