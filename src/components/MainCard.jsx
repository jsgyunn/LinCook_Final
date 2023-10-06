import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { contentDetailProductState, locationState } from '../recoil/atoms'; // import locationState

export default function MainCard() {
    const navigate = useNavigate();
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contentDetailProduct, setContentDetailProduct] = useRecoilState(contentDetailProductState);

    // Get the location data from Recoil state
    const locationData = useRecoilValue(locationState);
    console.log("메인카드: ", locationData)

    useEffect(() => {
        axios
            .get('http://3.37.4.231:8080/main', {
                params: {
                    offset: 0,
                    limit: 30,
                },
            })
            .then((response) => {
                const contentList = response.data.result;
                setContents(contentList);
                setLoading(false);
                console.log("콘텐츠 리스트:", contentList);
            })
            .catch((error) => {
                console.error('메인 데이터를 불러오는 중 에러 발생:', error);
                setLoading(false);
            });
    }, []);



    // const navigateToContentDetail = (contentId) => {
    //     // Use the locationData from Recoil state
    //     axios
    //         .get('http://3.37.4.231:8080/detail-content', {
    //             params: {
    //                 contents_id: contentId,
    //                 url: '',
    //                 latitude: locationData.latitude, // Use latitude from Recoil state
    //                 longitude: locationData.longitude, // Use longitude from Recoil state
    //             },
    //         })
    //         .then((response) => {
    //             const detailProduct = response.data.result;
    //             setContentDetailProduct(detailProduct);
    //             setLoading(false);
    //             console.log("디테일:", detailProduct);
    //             // console.log(contentDetailProduct.contentsDto)
    //             navigate('/contentdetail');
    //         })
    //         .catch((error) => {
    //             console.error('디테일 데이터를 불러오는 중 에러 발생:', error);
    //             setLoading(false);
    //         });
    // };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Contents</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                        {contents.map((content) => (
                            <Link
                                to={"/contentdetail/" + content.id}
                                key={content.id}
                                // href={content.href}
                                // member_id={content.member_id}
                                className="group"
                            // onClick={() => navigateToContentDetail(content.id)}
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={`https://img.youtube.com/vi/${content.url}/maxresdefault.jpg`}
                                        alt="이미지 없음"
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-gray-700">{content.title}</h3>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
