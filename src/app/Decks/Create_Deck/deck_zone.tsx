"use client"

import { Card } from "@/app/card"

type Props = {
    card: Card,
    addCard: (card: Card) => void
}

export default function DeckZone() {

    let deckList: {[key: string]: number} = {}
    let displayDeckList: {[key: string]: number} = {}

    const handleAddCard = (card: Card) => {
        if (deckList[card.id]) {
            if (deckList[card.id] >= 4) {
                alert("You can only have 4 copies of a card in your deck.")
                return
            }
            deckList[card.id] += 1
        } else {
            deckList[card.id] = 1
        }
        displayDeckList[card.name] = displayDeckList[card.name] ? displayDeckList[card.name] + 1 : 1


    }

    return (
        <div className="bg-gray-400 opacity-30 flex-1 h-[calc(100vh-8rem)] mr-5">

        </div>
    )
}