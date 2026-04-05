import SearchBar from "./search_bar"

const example =[
  {name: "card1", image: "https://www.optcgapi.com/media/static/Card_Images/OP01-094.jpg"},
  {name: "card2", image: "https://www.optcgapi.com/media/static/Card_Images/OP01-077.jpg"},
  {name: "card3", image: "https://www.optcgapi.com/media/static/Card_Images/OP01-051.jpg"},
]

const listExample = example.map((card) => 
  <li key={card.name} className="flex items-center gap-4">
    {card.name}
    <img src={card.image} alt={card.name} className="w-40 h-auto" />
  </li>
)

export default function Card_List() {
  return (
    <div>
      <SearchBar />
      <h1 className="ml-4">Card List Page</h1>
      <ul className="ml-4 space-y-4">
        {listExample}
      </ul>
    </div>
  )
}