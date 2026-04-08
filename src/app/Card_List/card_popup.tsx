import {Card, ApiCard} from "./card"


export default function CardPopup({card}: { card: Card  | null}){

    if (!card) return null

    return(    
    <div>
        <div className="fixed top-1/2 left-1/2 flex h-150 w-200 -translate-x-1/2 
        -translate-y-1/2 justify-start gap-10 rounded-4xl bg-gray-600 p-6">
            <img src={card.image} 
            className="h-full object-contain"/>
            <div className="flex flex-col gap-10 items-center bg-gray-300 p-4 rounded-4xl">

            <p className="text-2xl text-center text-black">{card.name} <br/>{card.number}</p>
            <p className="text-center text-black">{card.ApiCard.effect}</p>
            </div>  
            <button className="absolute top-2 right-2.5 flex items-center justify-center 
            w-6 h-6 text-white text-2xl hover:bg-white/20 rounded-full cursor-pointer">
            X
            </button>
        </div>
    </div>
    )

    

    
}