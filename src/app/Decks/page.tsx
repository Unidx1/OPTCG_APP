import CreateDeckButton from "./create_deck_button"

export default function Decks() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-cyan-400"> Your Decks </h1>
      <CreateDeckButton />
      <ul>
        <li>Deck 1</li>
        <li>Deck 2</li>
        <li>Deck 3</li>
      </ul>
      <hr></hr>
    </div>
  )
}