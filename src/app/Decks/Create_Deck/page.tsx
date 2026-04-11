"use client"

import SearchBar from "@/components/search_bar"
import { useState } from "react"
import {Card, ApiCard} from "@/app/card"
import CardListElement from "./card_List"

export default function Create_Deck() {

  const [cards, setCards] = useState<Card[]>([])

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

  return (
    <div className="flex items-center w-screen gap-8">
      <div className="bg-gray-700 w-1/3 h-[calc(100vh-8rem)] ml-5 flex flex-col">
        <div className="flex items-center gap-10 ">
          <SearchBar onSearch={handleSubmit} classNameInput="ml-4 mt-4 bg-gray-400" 
          classNameForm="w-2/3"/>
          <button className="bg-gray-400 flex-1 rounded-xl mr-5">Filter ↓</button>
        </div>
        <div className="outline-2 outline-red-600 flex-1 min-h-0 overflow-auto">
          <CardListElement cards={cards}/>
        </div>
      </div>
        <div className="bg-gray-400 opacity-30 flex-1 h-[calc(100vh-8rem)] mr-5"></div>
    </div>
  )
}