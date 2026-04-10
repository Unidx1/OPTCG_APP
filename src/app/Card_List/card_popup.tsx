import {Card, ApiCard} from "../card"

type Prop = {
    card: Card | null,
    onExitClick: () => void
}

export default function CardPopup(prop: Prop){

    if (!prop.card) return null

    const counter = prop.card.ApiCard.counter > 0 && (`${prop.card.ApiCard.counter} counter`)
    const cost = prop.card.ApiCard.cost ? `${prop.card.ApiCard.cost} cost`: null

    return(    
    <div>
        <div className="fixed top-1/2 left-1/2 flex h-150 w-200 -translate-x-1/2 
        -translate-y-1/2 justify-start gap-10 rounded-4xl bg-gray-600 p-6 z-100">
            <img src={prop.card.image} 
            className="h-full object-contain"/>
            <div className="flex flex-col gap-4 items-center bg-gray-300 p-4 rounded-4xl">

            <p className="text-2xl text-center text-black">{prop.card.name} <br/>{prop.card.number}
            <br/>{cost}<br/> {counter}<br/>Block {prop.card.ApiCard.block}</p>
            <p className="text-center text-black">{prop.card.ApiCard.effect}</p>
            </div>  
            <button onClick={() => prop.onExitClick()} className="absolute top-2 right-2.5 flex items-center justify-center 
            w-6 h-6 text-white text-2xl bg-red-400 hover:bg-red-600 rounded-full cursor-pointer">
            X
            </button>
        </div>
    </div>
    )

    

    
}