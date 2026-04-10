"use client"
import { Card } from "../card"

type Props = {
    cards: Card[],
    onClick: (card: Card) => void
}

export default function CardListElement(prop: Props) {

    const handleClick = (card: Card) => {
        prop.onClick(card)
    }

    return (
        <ul className="mt-5 px-4 grid grid-cols-5 gap-10">
            {prop.cards.map((card) => (
                <li key={card.id} className="min-w-0 hover:scale-110">
                    <h2 className="text-sm font-medium truncate">{card.name} {card.number}</h2>
                    <img onClick={() => handleClick(card)} src={card.image} alt={card.name}/>
                </li>
            ))}
        </ul>
    )
}
