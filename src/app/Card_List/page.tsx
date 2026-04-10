"use client"

import SearchBar from "../../components/search_bar"
import { useState } from "react"
import CardListElement from "./card_List"
import CardPopup from "./card_popup"
import {Card, ApiCard} from "../card"

export default function Card_List() {

  const [cards, setCards] = useState<Card[]>([])
  const [selectedCard, selectCard] = useState<Card | null>(null)

  const handleSubmit = async (searchTerm: string) => {
    const res = await fetch(`/api/cards?search=${searchTerm}`)
    const data = await res.json()

    setCards(data.map((card: ApiCard)=> {
      return{
          id: card.id,
          number: card.card_number,
          name: card.card_name,
          image: card.image,
          ApiCard: card
        }
    }))

    console.log(cards)
  }

  const handleClick = (card: Card) => {
    selectCard(card)
    console.log(card)
  }

  const handleExit = () => {
    selectCard(null)
  }

  return (
    <div className="w-full">
      <SearchBar onSearch={handleSubmit} className="ml-4"/>
      <h1 className="ml-4">Card List Page</h1>
      <CardPopup card={selectedCard} onExitClick={handleExit}/>
      <CardListElement cards={cards} onClick={handleClick}/>
    </div>
  )
} 