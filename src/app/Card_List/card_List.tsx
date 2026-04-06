

export default function card_List({cards}: {cards: Card[]}) {


    return (
        <ul className="ml-4 space-y-4">
            {cards.map((card) => (
                <li key={card.id}>
                    <h2>{card.name}</h2>
                    <img src={card.img} alt={card.name} />
                </li>
            ))}
        </ul>
    )
}
