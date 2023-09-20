import React from 'react'
import Youtube from '../api/Youtube'

export default function ContentDetailHeader() {
    const tests = {
        id: 1,
        name: '물 끓이는 시간보다 만드는 시간이 더 빨라요~ 90초 볶음라면!',
        href: 'https://www.youtube.com/watch?v=78AQ-ten9lE',
        price: '설명',
        imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
        imageAlt: '백종원이 요리비책',
        des: `대파제육볶음

        [재료]
        
        삼겹살 300g 
        통마늘 8알(50g)
        청양고추 3개(20g)
        대파 2대(200g)
        물 1/3컵(60g)
        진간장 3큰술(30g)
        설탕 1.5큰술(15g)
        굵은 고춧가루 1큰술(5g)
        고운 고춧가루 1큰술(5g)
        참기름 1/2큰술 (4g)
        맛소금 적당량
        후춧가루 적당량
        깨소금 적당량
        
        [쌈 재료]
        
        쌈 채소 적당량
        쌈장 적당량
         
         
        [만드는 법]
        
        1. 대파를 반 갈라  5cm 길이로 썰고, 청양고추는 두껍게 어슷하게 썰어준다.
        2. 마늘은 두껍게 편 썰고, 삼겹살은 한입 크기로 잘라준다.
        3. 팬에 삼겹살을 올리고 맛소금과 후춧가루를 뿌려 중약 불로 구워준다.
        4. 삼겹살이 노릇하게 익으면 마늘을 넣고 구워준다.
        5. 굽는 과정에 삼겹살에서 기름이 많이 나왔을 경우 적당히 덜어 빼준다.
        6. 마늘이 노릇하게 구워지면 설탕을 넣어 볶아준다.
        7. 간장을 팬 주위에 뿌려 누르듯이 볶아주어 불향을 내준다. 
        8. 손질한 대파를 넣고, 굵은 고춧가루, 고운 고춧가루를 넣어 볶아준다.
        9. 양념이 겉돌지 않게 물을 넣어주어 볶아준다.
        10. 파의 숨이 죽기 전에 후춧가루, 참기름 넣고 섞어준다.
        11. 접시에 담아 깨소금을 뿌려 완성한다.`
    }


    return (
        <div className="flex flex-col w-3/4 gap-5 p-4 mx-auto bg-white select-none sm:p-6 sm:h-72 rounded-2xl sm:flex-row">
            <div className="bg-white h-64 sm:h-full sm:w-96 rounded-xl flex items-center justify-center mr-7 ml-1">
                <Youtube />
            </div>

            <div className="flex flex-col flex-1 gap-5 sm:p-4">
                <div className="flex flex-col flex-1 gap-4">
                    <div className="w-full bg-white  h-5 rounded-2xl flex items-center justify-center break-words text-2xl">
                        {tests.name}
                    </div>

                    <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center break-words overflow-y-auto mt-5 text-center">
                        {tests.des}
                    </div>
                </div>
            </div>
        </div>
    )
}
