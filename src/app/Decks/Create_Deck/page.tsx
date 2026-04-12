"use client"

import SearchBar from "@/components/search_bar"
import { useState } from "react"
import {Card, ApiCard} from "@/app/card"
import CardListElement from "./card_List"
import DeckZone from "./deck_zone"
import SaveDeckButton from "./save_deck_button"

type displayEntry = {
    count: number,
    card: Card
}

export default function Create_Deck() {

  const [cards, setCards] = useState<Card[]>([])
  const [displayDeckList, setDisplayDeckList] = useState<{[key: string]: displayEntry}>({})
  const [deckList, setDeckList] = useState<{[key: string]: number}>({})
  const [cardCount, setCardCount] = useState<number>(0)
  const [isLegal, setIsLegal] = useState<boolean>(false)

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


  const handleAddCardClick = (card: Card) => {

    if (deckList[card.number]) {
        if (deckList[card.number] >= 4) {
            alert("You can only have 4 copies of a card in your deck.")
            return
        }
        setDeckList(prev => ({
            ...prev,
            [card.number]: prev[card.number] + 1
        }))
    } else {
        setDeckList(prev => ({
            ...prev,
            [card.number]: 1
        }))
    }
    setDisplayDeckList(prev => ({
        ...prev,
        [card.name]: prev[card.name] ? {...prev[card.name], count: prev[card.name].count + 1} : {count: 1, card}
    }))
    setCardCount(prev => prev + 1)
  }

  const handleRemoveCardClick = (entry: displayEntry) => {
    const card = entry.card
    setDisplayDeckList(prev => {
      if (prev[card.name].count === 1) {
          const {[card.name]: removedEntry, ...rest} = prev
          return rest
      } else{
        return {
          ...prev,
          [card.name]: {...prev[card.name], count: prev[card.name].count - 1}
        }
      }
    })
    setDeckList(prev => {
      if (prev[card.number] === 1) {
        const {[card.number]: removedCount, ...rest} = prev
        return rest
      } else {
        return {
          ...prev,
          [card.number]: prev[card.number] - 1
        }
      }
   })
  }

  const handleSaveDeck = async () => {
    const deckData = {
      name: "New Deck",
      cards: { 
        deckList: deckList, 
        displayDeckList: displayDeckList
      }
    }

    fetch("/api/decks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(deckData)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Deck saved successfully!")
      } else {
        alert("Error saving deck: " + data.error)
      }
    })
    .catch(err => {
      alert("Error saving deck: " + err.message)
    })

  }

  return (
    <div className="flex items-center w-screen gap-8">

      <div className="bg-gray-700 w-1/3 h-[calc(100vh-8rem)] ml-5 flex flex-col">
        <div className="flex items-center gap-10 ">
          <SearchBar onSearch={handleSubmit} classNameInput="ml-4 mt-4 bg-gray-400" 
          classNameForm="w-2/3"/>
          <button className="bg-gray-400 flex-1 rounded-xl mr-5">Filter ↓</button>
        </div>
        <div className=" flex-1 min-h-0 overflow-auto">
          <CardListElement onClick={handleAddCardClick} cards={cards}/>
        </div>
      </div>
      
      <div className="bg-gray-400 flex flex-col flex-1 h-[calc(100vh-8rem)] mr-5">
        <div className="h-18 bg-gray-700 outline-2 outline-black">
          <SaveDeckButton onSave={handleSaveDeck} />
          <button className="bg-gray-500 rounded-xl mt-4 ml-4 px-5 py-2 hover: cursor-pointer">Copy Deck To Clipboard</button>
          <button className="bg-gray-500 rounded-xl mt-4 ml-4 px-5 py-2 hover: cursor-pointer">Share Deck</button>
        </div>
        <DeckZone cardDisplay={displayDeckList} removeCard={handleRemoveCardClick}/>
      </div>
      
    </div>
  )
}