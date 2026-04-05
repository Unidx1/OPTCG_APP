"use client"
import { useState } from "react"

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <input
                type="text"
                placeholder="Search for a specific card"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-30% p-2 border border-gray-300 rounded-md mb-4"
            />
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">Submit</button>
        </>
    )
}