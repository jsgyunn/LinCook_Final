import React, { useEffect, useState } from 'react';
import ChoiceButton from '../components/ChoiceButton';
import ExceptButton from './ExceptButton';
import { useRecoilValue, useRecoilState, } from 'recoil';
import { registrationDataState } from '../recoil/atoms';
import { selectedProductsState } from '../recoil/atoms';
import axios from 'axios';

export default function CookingRegistrationCard() {
    const registrationData = useRecoilValue(registrationDataState);
    const { description_1 } = registrationData;

    // 초기 상태 값을 빈 배열로 설정합니다.
    const [descriptionCard, SetdescriptionCard] = useState([]);
    const [loading, setLoading] = useState(true);

    // 선택한 상품의 product_id와 선택 여부를 저장할 객체 배열 상태를 추가합니다.
    const [selectedProducts, setSelectedProducts] = useRecoilState(selectedProductsState);
    console.log("선택된 ID:", selectedProducts)

    // "추가하기" 버튼 클릭 시 처리하는 함수
    const handleAddToCart = (product_id) => {
        // 이미 선택된 상품인지 확인
        const isAlreadySelected = selectedProducts.some((product) => product.product_id === product_id);

        // 이미 선택된 상품이 아니면 선택 상태에 추가
        if (!isAlreadySelected) {
            setSelectedProducts([...selectedProducts, { product_id, selected: true }]);
        }
    };

    // "제외하기" 버튼 클릭 시 처리하는 함수
    const handleRemoveFromCart = (product_id) => {
        // 선택 상태 업데이트: 선택을 취소함
        setSelectedProducts((prevState) =>
            prevState.map((product) =>
                product.product_id === product_id ? { ...product, selected: false } : product
            )
        );
    };





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
    }, [description_1]);

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
                                {descriptionCard[productName].map((descriptionItem) => {
                                    // 선택 상품 목록에서 현재 상품을 찾습니다.
                                    const selectedProduct = selectedProducts.find(
                                        (product) => product.product_id === descriptionItem._source.product_id
                                    );

                                    return (
                                        <div key={descriptionItem._id} className="group flex-shrink-0 mr-6">
                                            <div className="w-40 h-40 bg-gray-200 rounded-lg overflow-hidden">
                                                <img
                                                    src={descriptionItem._source.img_url}
                                                    alt="사진"
                                                    className="w-full h-full object-cover object-center object-contain"
                                                />
                                            </div>
                                            <h3 className="mt-4 text-sm text-gray-700">{descriptionItem._source.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">
                                                {`${descriptionItem._source.sale_price.toLocaleString()} 원`}
                                            </p>
                                            <p className="flex justify-center">
                                                {/* 선택된 상품이면 "제외하기" 버튼을 렌더링, 아니면 "추가하기" 버튼을 렌더링 */}
                                                {selectedProduct && selectedProduct.selected ? (
                                                    <button
                                                        onClick={() => handleRemoveFromCart(descriptionItem._source.product_id)}
                                                        className="group flex items-center justify-center gap-2 rounded-md bg-gray-400 px-5 py-3 text-white transition hover:bg-gray-500"
                                                    >
                                                        <span className="text-sm font-medium">제외하기</span>
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handleAddToCart(descriptionItem._source.product_id)}
                                                        className="group flex items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
                                                    >
                                                        <span className="text-sm font-medium">추가하기</span>
                                                    </button>
                                                )}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* 선택한 상품들의 product_id와 선택 여부를 출력합니다. */}
            <div>
                <h2>선택한 상품들:</h2>
                <ul>
                    {selectedProducts.map((product) => (
                        <li key={product.product_id}>
                            {`${product.product_id} (${product.selected ? '선택됨' : '선택 안됨'})`}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
