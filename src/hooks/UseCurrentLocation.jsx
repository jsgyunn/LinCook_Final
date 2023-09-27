import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "../recoil/atoms";
import Kakao from "../api/Kakao";


const useCurrentLocation = ({ addressChecked, setAddressChecked }) => {

    const [location, setLocation] = useRecoilState(locationState);
    const [error, setError] = useState(null);

    //성공
    const handleSuccess = (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({
            latitude,
            longitude,
        });
    };

    //실패
    const handleError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        if (addressChecked === true) {
            // console.log(location)
        } else {
            const { geolocation } = navigator;
            if (!geolocation) {
                setError("Geolocation is not supported.");

            }
            geolocation.getCurrentPosition(handleSuccess, handleError, {});
            sessionStorage.setItem("location", JSON.stringify(location));
            setAddressChecked(true);
        }

    }, [location]);

    return (

        <>
            {location ? <Kakao location={location} /> : <span>주소 확인하는 중.....</span>
            }
        </>
    )


    return { location, error };
};


export default useCurrentLocation;