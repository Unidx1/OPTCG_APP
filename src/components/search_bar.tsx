"use client"
import { useState } from "react"

type Prop = {
    onSearch: (searchTerm: string) => void,
    classNameInput?: string
    classNameForm?: string
}

export default function SearchBar(prop: Prop) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        prop.onSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit} className={prop.classNameForm}>
            <input
                type="text"
                placeholder="Search for a specific card"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className= {`w-full p-2 border placeholder:text-white border-gray-300 
                    rounded-md mb-4 ${prop.classNameInput}`}
            />
        </form>
    )
}