import React from 'react'

export default function Input() {
    return (
        <div>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700">
                Email
            </label>

            <input
                type="url"
                id="URL"
                placeholder="john@rhcp.com"
                className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
        </div>
    )
}




