import { Card } from "./card"

export default function cardListElement({cards}: {cards: Card[]}) {
    return (
        <ul className="ml-4 space-y-4 flex flex-wrap gap-10">
            {cards.map((card) => (
                <li key={card.id} className="w-1/5">
                    <h2>{card.name} {card.number} </h2>
                    <img src={card.image} alt={card.name}/>
                </li>
            ))}
        </ul>
    )
}
