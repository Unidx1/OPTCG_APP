"use client"

import { Card } from "@/app/card"

type displayEntry = {
    count: number,
    card: Card
}


type Props = {
    cardDisplay: {[key: string]: displayEntry},
    removeCard: (card: displayEntry) => void
}

export default function DeckZone({ cardDisplay, removeCard }: Props) {


    return (
        <div className="overflow-y-auto flex-1">
            <ul className="mt-5 px-4 grid grid-cols-8 gap-5">
                {Object.values(cardDisplay).map((entry) => (
                    <li 
                    key={entry.card.id} 
                    className="flex flex-col items-center">
                        <img 
                        src={entry.card.image} 
                        alt={entry.card.name} 
                        onClick={() => removeCard(entry)}
                        className="Hover: cursor-pointer"/>
                        <span>{entry.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}