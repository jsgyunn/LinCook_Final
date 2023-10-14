import React from 'react';
const {Kakao} = window
function KakaoTalkShareButton() {
  const shareMessage = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '우리꺼에 적용해서 보내는중~~~~',
        description: '#내가해냄',
        imageUrl: '내가해냄',
        link: {
          mobileWebUrl: 'http://localhost:3000/',
          webUrl: 'http://localhost:3000/',
        },
      },
      // 나머지 공유 메시지 설정
    });
  };

  return (
    <a className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-500"
    onClick={shareMessage}>KakaoTalk 공유</a>
  );
}

export default KakaoTalkShareButton;