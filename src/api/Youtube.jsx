import React from 'react'
import YouTube from 'react-youtube'
import { useRecoilValue } from 'recoil';
import { contentDetailProductState } from '../recoil/atoms';








export default function Youtube() {

    const contentDetailProduct = useRecoilValue(contentDetailProductState);

    return (
        <div>
            <YouTube
                videoId={contentDetailProduct.contentsDto.url} //동영상 주소
                opts={{
                    width: "130%",
                    height: "230px",
                    playerVars: {
                        autoplay: 0, //자동 재생 여부 
                        rel: 1,
                        modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                        loop: 0, //반복 재생
                        playlist: contentDetailProduct.contentsDto.url, //반복 재생으로 재생할 플레이 리스트
                    },
                }}
                onReady={(e) => {
                    e.target.mute(); //소리 끔
                }}

                onEnd={(e) => { e.target.stopVideo(0); }} //동영상이 끝나고 다른 동영상 썸네일 뜨는 것 방지
            />
        </div>
    );
}
