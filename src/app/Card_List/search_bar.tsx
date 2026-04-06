"use client"
import { useState } from "react"

export default function SearchBar({onSearch}: {onSearch: (searchTerm: string) => void}) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for a specific card"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-30% p-2 border border-gray-300 rounded-md mb-4"
            />
        </form>
    )
}