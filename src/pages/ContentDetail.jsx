import React, { useEffect, useState } from 'react';
import ContentDetailHeader from '../components/ContentDetailHeader';
import ContentDetailCard from '../components/ContentDetailCard';
import Toast from '../components/Toast';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItemState, contentDetailProductState, locationState } from '../recoil/atoms';

export default function ContentDetail() {

    const params = useParams();
    // const contentDetailProduct = useRecoilValue(contentDetailProductState);
    const [contentDetailProduct, setContentDetailProduct] = useRecoilState(contentDetailProductState);
    const locationData = useRecoilValue(locationState);
    // console.log("콘텐츠디테일: ", locationData)
    // const contentID = contentDetailProduct.contentsDto.id;
    // console.log("ewqejnqwjkenjqwknejkwqnjk:", contentID)

    const [selectedTab, setSelectedTab] = useState('전체'); // 초기 탭을 '전체'로 설정
    const setCartItem = useSetRecoilState(cartItemState); // cartItemState 업데이트 함수
    const [shoppingData, setShoppingData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const cartItems = useRecoilValue(cartItemState);
    // const productID = cartItems.martDto.mart.productId;
    // const martID = cartItems.martDto.mart.id;
    // console.log("담기 버튼 누르면 저장되는 상품, 마트 정보:", cartItems);

    useEffect(() => {
        // Use the locationData from Recoil state
        axios
            .get('http://3.37.4.231:8080/detail-content', {
                params: {
                    contents_id: params.id,
                    url: '',
                    latitude: locationData.latitude, // Use latitude from Recoil state
                    longitude: locationData.longitude, // Use longitude from Recoil state
                },
            })
            .then((response) => {
                console.log(response);
                const detailProduct = response.data.result;
                setContentDetailProduct(detailProduct);
                console.log("컨텐트디테일프로덕트:", contentDetailProduct)
                setIsLoading(true);
                // console.log(contentDetailProduct.contentsDto)
            })
            .catch((error) => {
                console.error('디테일 데이터를 불러오는 중 에러 발생:', error);
            });
    }, [locationData.latitude, locationData.longitude])


    return (
        <div>
            <Toast />
            {isLoading && <ContentDetailHeader />}
            {isLoading && <ContentDetailCard />}
        </div>
    );
}
