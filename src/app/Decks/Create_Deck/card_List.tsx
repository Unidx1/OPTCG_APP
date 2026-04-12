"use client"
import { Card } from "@/app/card"

type Props = {
    cards: Card[],
    onClick: (card: Card) => void
}

export default function CardListElement(prop: Props) {

    return (
        <ul className="mt-5 px-4 grid grid-cols-4 gap-10">
            {prop.cards.map((card) => (
                <li key={card.id} className="min-w-0 hover:scale-110">
                    <h2 className="text-sm font-medium truncate">{card.name} {card.number}</h2>
                    <img 
                    onClick={() => prop.onClick(card)} 
                    src={card.image} 
                    alt={card.name}
                    className="hover: cursor-pointer"/>
                </li>
            ))}
        </ul>
    )
}
