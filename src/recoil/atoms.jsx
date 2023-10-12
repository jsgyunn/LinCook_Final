import { atom } from "recoil";

//유튜브 영상 ID를 저장하는 Recoil 상태
export const youtubeVideoIdState = atom({
    key: 'youtubeVideoIdState',
    default: '', // 초기값은 빈 문자열로 설정
});

export const registrationDataState = atom({
    key: 'registrationDataState',
    default: [],
});

export const locationState = atom({
    key: 'locationState',
    default: { latitude: null, longitude: null }, // 기본값은 빈 객체로 설정
});

export const contentDetailProductState = atom({
    key: 'contentDetailProductState',
    default: [],
});

export const cartItemState = atom({
    key: 'cartItemState',
    default: [],
});

export const selectedProductsState = atom({
    key: 'selectedProductsState',
    default: [], // 초기 값은 빈 배열
});

export const basketInfoState = atom({
    key: 'basketInfoState',
    default: [], // 초기 값은 빈 배열
});

export const addressState = atom({
    key: 'addressState',
    default: [null], // 초기 값은 빈 배열
});

export const isloginState = atom({
    key: 'isloginState',
    default: (false),
});