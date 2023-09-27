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
