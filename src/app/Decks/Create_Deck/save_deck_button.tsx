"use client"

type Props = {
    onSave: () => void
}

export default function SaveDeckButton({ onSave }: Props) {


    return (
        <button 
        className="bg-gray-500 rounded-xl mt-4 ml-4 px-5 py-2 hover: cursor-pointer"
        onClick={onSave}>
            Save Deck
        </button>
    )

}