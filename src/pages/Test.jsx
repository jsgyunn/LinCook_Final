import React from 'react'
import CookingRegistrationCard from '../components/CookingRegistrationCard'

export default function Test() {

    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-start-2 row-span-2 bg-gray-500">01</div>
            <div className="row-end-3 row-span-2 bg-gray-500">02</div>
            <div className=" mr-4 h-80 row-start-1 row-end-4 bg-gray-500">03</div>
        </div>        // <CookingRegistrationCard />
    )
}
