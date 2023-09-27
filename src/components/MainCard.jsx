import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { contentDetailProductState, locationState } from '../recoil/atoms'; // import locationState

export default function MainCard() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contentDetailProduct, setContentDetailProduct] = useRecoilState(contentDetailProductState);

    // Get the location data from Recoil state
    const locationData = useRecoilValue(locationState);

    useEffect(() => {
        axios
            .get('http://3.37.4.231:8080/main', {
                params: {
                    offset: 0,
                    limit: 30,
                },
            })
            .then((response) => {
                const productList = response.data.result;
                setProducts(productList);
                setLoading(false);
                console.log(productList);
            })
            .catch((error) => {
                console.error('메인 데이터를 불러오는 중 에러 발생:', error);
                setLoading(false);
            });
    }, []);

    const navigateToContentDetail = (productId) => {
        // Use the locationData from Recoil state
        axios
            .get('http://3.37.4.231:8080/detail-content', {
                params: {
                    contents_id: productId,
                    url: '',
                    latitude: locationData.latitude, // Use latitude from Recoil state
                    longitude: locationData.longitude, // Use longitude from Recoil state
                },
            })
            .then((response) => {
                const detailProduct = response.data.result;
                setContentDetailProduct(detailProduct);
                setLoading(false);
                console.log(detailProduct);
                // console.log(contentDetailProduct.contentsDto)
                navigate('/contentdetail');
            })
            .catch((error) => {
                console.error('디테일 데이터를 불러오는 중 에러 발생:', error);
                setLoading(false);
            });
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                        {products.map((product) => (
                            <a
                                key={product.id}
                                href={product.href}
                                member_id={product.member_id}
                                className="group"
                                onClick={() => navigateToContentDetail(product.id)}
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={`https://img.youtube.com/vi/${product.url}/maxresdefault.jpg`}
                                        alt="이미지 없음"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-gray-700">{product.title}</h3>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
