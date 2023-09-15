import React from 'react'

export default function CookingRegistrationCard() {

    const ingredients = [
        {
            id: 1,
            name: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },
        {
            id: 2,
            name: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },
        {
            id: 3,
            name: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },
        {
            id: 4,
            name: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },
        {
            id: 5,
            name: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },

        {
            id: 6,
            name: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },

        {
            id: 7,
            name: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },

        {
            id: 8,
            name: '비비고사골곰탕',
            href: '#',
            price: '500G(100g 당 240원)',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '사골곰탕',
        },

    ]


    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-3xl lg:px-8">
                    <h2 className="sr-only">Ingredients</h2>

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
                                <h3 className="mt-4 text-sm text-gray-700">{ingredient.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{ingredient.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}