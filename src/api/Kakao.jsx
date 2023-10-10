import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { addressState } from '../recoil/atoms';



export default function Kakao({ location }) {
    const { kakao } = window;
    const [address, setAddress] = useRecoilState(addressState);
    console.log("주소", address)
    console.log("KaKao 컴포넌트: ", location);
    const lat = location.latitude;
    const lng = location.longitude
    // console.log(location.longitude);

    const getAddress = (lat, lng) => {
        const geocoder = new kakao.maps.services.Geocoder();
        const coord = new kakao.maps.LatLng(lat, lng);
        const callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                setAddress(result[0].address);
                // sessionStorage.setItem("address", result[0].address.address_name);
            }
        };
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);

    };

    useEffect(() => {
        getAddress(lat, lng)
    }, [])


    return (
        <>
            {/* <Map center={{ lat: 37.5566803113882, lng: 126.904501286522 }} style={{ width: '800px', height: '600px' }} level={3}>
                <MapMarker position={{ lat: 37.5566803113882, lng: 126.904501286522 }} />
                <button onClick={getAddress}>현재 좌표의 주소 얻기</button>
            </Map>
            <button onClick={getAddress}>현재 좌표의 주소 얻기</button> */}
            {
                address && (
                    <div>
                        <span>{address.address_name}</span>
                        {/* <p>region_1depth_name: {address.region_1depth_name}</p>
                        <p>region_2depth_name: {address.region_2depth_name}</p>
                        <p>region_3depth_name: {address.region_3depth_name}</p> */}
                    </div>
                )
            }
        </>
    )

};
