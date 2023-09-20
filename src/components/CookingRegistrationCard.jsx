import React from 'react'
import ChoiceButton from '../components/ChoiceButton';
import ExceptButton from './ExceptButton';

export default function CookingRegistrationCard() {

    const ingredients = [
        {
            id: 1,
            name: '사골곰탕',
            detailName: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },
        {
            id: 2,
            name: '사골곰탕',
            detailName: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },
        {
            id: 3,
            name: '사골곰탕',
            detailName: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },
        {
            id: 4,
            name: '사골곰탕',
            detailName: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },
        {
            id: 5,
            name: '사골곰탕',
            detailName: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },

        {
            id: 6,
            name: '사골곰탕',
            detailName: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },

        {
            id: 7,
            name: '사골곰탕',
            detailName: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },

        {
            id: 8,
            name: '사골곰탕',
            detailName: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },

    ]


    return (
        <>
            <div className="bg-white">



                <div className="bg-white border border-gray-200 border-2 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-3xl lg:px-1 lg:py-2 rounded-lg">
                    <h2 className="sr-only">Ingredients</h2>

                    <div className="flex justify-between mb-2">
                        <div className="flex">
                            <div className="mr-auto">
                                <span className="font-bold">
                                    {ingredients[0].name}</span> <br />
                                <span>재료 수량</span>
                            </div>

                        </div>
                        <span>
                            <ExceptButton />
                        </span>
                    </div>
                    <div className="mb-4 h-0.5 bg-gray-200"></div>

                    <div className="flex overflow-x-auto">
                        {ingredients.map((ingredient) => (
                            <a key={ingredient.id} className="group flex-shrink-0 mr-6">
                                <div className="w-40 h-40 bg-gray-200 rounded-lg overflow-hidden">
                                    <img
                                        src={ingredient.imageSrc}
                                        alt={ingredient.imageAlt}
                                        className="w-full h-full object-cover object-center object-contain" // 이미지 크기 및 표시 설정
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{ingredient.detailName}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{ingredient.price}</p>
                                <p className='flex justify-center'>
                                    <ChoiceButton />
                                </p>
                            </a>
                        ))}
                    </div>
                </div>




            </div>
        </>);
}