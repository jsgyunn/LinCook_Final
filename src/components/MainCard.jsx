import React from 'react'

export default function MainCard() {

    const products = [
        {
            id: 1,
            name: '물 끓이는 시간보다 만드는 시간이 더 빨라요~ 90초 볶음라면!',
            href: 'https://www.youtube.com/watch?v=78AQ-ten9lE',
            price: '설명',
            imageSrc: 'https://img.youtube.com/vi/78AQ-ten9lE/maxresdefault.jpg',
            imageAlt: '백종원이 요리비책',
        },
        {
            id: 2,
            name: '[이연복] 재료 2개로도 풍미 가득! 겉은 바삭 속은 부드러운 초간단 레시피! 계란부추군만두!',
            href: 'https://www.youtube.com/watch?v=3Bwbb1LWEiQ',
            price: '설명',
            imageSrc: 'https://img.youtube.com/vi/3Bwbb1LWEiQ/maxresdefault.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: '거짓말 아니고 이걸로 밥 3공기 먹었습니다.',
            href: 'https://www.youtube.com/watch?v=09li1coY4As',
            price: '설명',
            imageSrc: 'https://img.youtube.com/vi/09li1coY4As/maxresdefault.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: '거짓말 아니고 이걸로 밥 3공기 먹었습니다.',
            href: 'https://www.youtube.com/watch?v=09li1coY4As',
            price: '설명',
            imageSrc: 'https://img.youtube.com/vi/09li1coY4As/maxresdefault.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 5,
            name: '거짓말 아니고 이걸로 밥 3공기 먹었습니다.',
            href: 'https://www.youtube.com/watch?v=09li1coY4As',
            price: '설명',
            imageSrc: 'https://img.youtube.com/vi/09li1coY4As/maxresdefault.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },


    ]


    return (
        <>

            <div className="bg-white" >
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div >
        </>

    )
}