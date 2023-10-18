import React, { useEffect, useState } from 'react';
import deleteoutlined from '../assets/deleteoutlined.png';
import ChoiceButton from '../components/ChoiceButton';
import { useRecoilValue, useRecoilState } from 'recoil';
import { registrationDataState } from '../recoil/atoms';
import { selectedProductsState } from '../recoil/atoms';
import axios from 'axios';

export default function CookingRegistrationCard() {
    const registrationData = useRecoilValue(registrationDataState);
    const { description_1 } = registrationData;
    const [descriptionCard, setDescriptionCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProducts, setSelectedProducts] = useRecoilState(selectedProductsState);
    console.log("선택된 ID:", selectedProducts);

    const handleAddToCart = (product_id) => {
        const isAlreadySelected = selectedProducts.some((product) => product.product_id === product_id);
        if (!isAlreadySelected) {
            setSelectedProducts([...selectedProducts, { product_id, selected: true }]);
        }
    };

    const handleRemoveFromCart = (product_id) => {
        const updatedProducts = selectedProducts.filter(product => product.product_id !== product_id);
        setSelectedProducts(updatedProducts);
    };


    useEffect(() => {
        axios
            .post('http://13.125.174.235:5000/', description_1)
            .then((response) => {
                setDescriptionCard(response.data);
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
                        <div className="bg-white border border-gray-200 border-2 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-3xl lg:px-1 lg:py-2 rounded-lg mt-5" style={{ maxWidth: '52rem' }}>
                            <h2 className="sr-only">descriptionCards</h2>
                            <div className="flex justify-between mb-2 items-center">
                                <span>
                                    <h2 className="font-bold text-xl ml-3">{productName}</h2>
                                </span>

                                {/* <button
                                    type="submit"
                                    className={`flex items-center justify-center gap-2 bg-gray-400 rounded-md px-7 py-2 text-white transition sm:w-auto hover:bg-green-700`}
                                >
                                    <span className="w-6 h-6">
                                        <img src={deleteoutlined} alt="삭제" />
                                    </span>
                                    <span className="text-lg font-bold">
                                        재료에서 제외하기
                                    </span>
                                </button> */}

                            </div>
                            <div className="mb-4 h-0.5 bg-gray-200"></div>
                            {descriptionCard[productName].length === 0 ? (
                                <div className="font-medium">
                                    현재 링쿡에 해당되는 재료 정보가 없습니다.😭<br /> 더 나은 링쿡이 될 수 있도록 노력하겠습니다.
                                </div>
                            ) : (
                                <div className="flex overflow-x-auto">
                                    {descriptionCard[productName].map((descriptionItem) => {
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

                                                <p className="mt-1 text-sm font-semibold text-gray-900">
                                                    {descriptionItem._source.capacity}
                                                </p>

                                                <p className="flex justify-center mt-2">
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
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* 선택한 상품들의 product_id와 선택 여부를 출력합니다. */}
            {/* <div>
                <h2>선택한 상품들:</h2>
                <ul>
                    {selectedProducts.map((product) => (
                        <li key={product.product_id}>
                            {`${product.product_id} (${product.selected ? '선택됨' : '선택 안됨'})`}
                        </li>
                    ))}
                </ul>
            </div> */}
        </>
    );
}