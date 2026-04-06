"use client"

import SearchBar from "./search_bar"
import { useState } from "react"
import CardListElement from "./card_List"
import {Card, ApiCard} from "./card"

export default function Card_List() {

  const [cards, setCards] = useState<Card[]>([])

  const handleSubmit = async (searchTerm: string) => {
    const res = await fetch(`/api/cards?search=${searchTerm}`)
    const data = await res.json()

    setCards(data.map((card: ApiCard)=> {
      return{
          id: card.id,
          number: card.card_number,
          name: card.card_name,
          image: card.image
        }
    }))

    console.log(cards)
  }

  return (
    <div className="w-screen">
      <SearchBar onSearch={handleSubmit} />
      <h1 className="ml-4">Card List Page</h1>
      <CardListElement cards={cards} />
    </div>
  )
} 