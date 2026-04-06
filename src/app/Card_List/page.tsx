"use client"

import SearchBar from "./search_bar"
import { useState } from "react"
import card_List from "./card_List"

type Card = {
  id: number
  number: string
  name: string
  img: string
}

export default function Card_List() {

  const [cards, setCards] = useState<Card[]>([])

  const handleSubmit = async (searchTerm: string) => {
    const res = await fetch(`/api/cards?search=${searchTerm}`)
    const data = await res.json()

    setCards(data)
  }

  return (
    <div>
      <SearchBar onSearch={handleSubmit} />
      <h1 className="ml-4">Card List Page</h1>
      <ul className="ml-4 space-y-4">
        {card_List}
      </ul>
    </div>
  )
}