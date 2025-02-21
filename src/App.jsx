// Vite + React app that displays learning cards using the data passed/generated.
// When printing to landscape A4 pages the cards will be arranged on a 4 x 4 grid of A6 cards.

import './GridPages.css'
import Decks from './Decks.jsx'

const deckId = 'd' // addition (a & aa), subtraction (s & ss) , multiplication (m & mm), division (d & dd)

const Page = ({ cards }) => (
  <div className="page">
    {cards.map((item, index) => (
      <div
        key={index}
        className="card"
      >
        <span className="card-image-container" >
          <img className="card-image" src={item.image} />
        </span>
        <span className="card-text">{item.value}</span>
      </div>
    ))}
  </div>
)

const GridPages = () => {
  const chunkSize = 16 // cards per page
  const pages = []
  const cards = Decks(deckId).getCards()

  for (let i = 0; i < cards.length; i += chunkSize) {
    pages.push(cards.slice(i, i + chunkSize))
  }
  return (
    <div className="container">
      {pages.map((cards, index) => (<Page key={index} cards={cards} />))}
    </div>
  )
}

export default GridPages
