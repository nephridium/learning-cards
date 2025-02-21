// Available cards decks, getCards() returns an array of cards with {image, value}
const Decks = (id) => [
  {
    id: 'a',
    title: 'Addition',
    getCards: () => {
      let cards = []
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const n = i + 1
          const m = j + 1
          const card = {
            image: `images/img_${m % 10}.png`,
            value:`${n} + ${m}` 
          }
          cards.push(card)
        }
      }
      return cards
    }
  },
  {
    id: 'aa',
    title: 'Addition Solutions',
    getCards: () => {
      let cards = []
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const n = i + 1
          const m = j + 1
          const card = {
            image: `images/img_${m % 10}.png`,
            value: n + m
          }
          cards.push(card)
        }
      }
      return reverseRows(cards)
    }
  },

  {
    id: 's',
    title: 'Subtraction',
    getCards: () => {
      let cards = []
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const n = i + 1
          const m = j + 1
          const card = {
            image: `images/img_${m % 10}.png`,
            value:`${n} - ${m}` 
          }
          cards.push(card)
        }
      }
      return cards
    }
  },
  {
    id: 's',
    title: 'Subtraction Solutions',
    getCards: () => {
      let cards = []
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const n = i + 1
          const m = j + 1
          const card = {
            image: `images/img_${m % 10}.png`,
            value: n - m
          }
          cards.push(card)
        }
      }
      return reverseRows(cards)
    }
  },

  {
    id: 'm',
    title: 'Multiplication',
    getCards: () => {
      let cards = []
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const n = i + 1
          const m = j + 1
          const card = {
            image: `images/img_${m % 10}.png`,
            value:`${n} × ${m}` 
          }
          cards.push(card)
        }
      }
      return cards
    }
  },
  {
    id: 'mm',
    title: 'Multiplication Solutions',
    getCards: () => {
      let cards = []
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const n = i + 1
          const m = j + 1
          const card = {
            image: `images/img_${m % 10}.png`,
            value: n * m
          }
          cards.push(card)
        }
      }
      return reverseRows(cards)
    }
  },

  {
    id: 'd',
    title: 'Division',
    getCards: () => {
      let cards = []
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const n = i + 1
          const m = j + 1
          const card = {
            image: `images/img_${m % 10}.png`,
            value:`${n} ÷ ${m}` 
          }
          cards.push(card)
        }
      }
      return cards
    }
  },
  {
    id: 'dd',
    title: 'Division Solutions',
    getCards: () => {
      let cards = []
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const n = i + 1
          const m = j + 1
          const result = String(n / m)
          const card = {
            image: `images/img_${m % 10}.png`,
            value: result.length > 5 ? `${result.slice(0, 5)}...` : result // truncate result if too long
          }
          cards.push(card)
        }
      }
      return reverseRows(cards)
    }
  }
].find(deck => deck.id === id)

// This function is needed for the solutions pages to reverse each row so the print-outs on the obverse sides of each page match up correctly
function reverseRows (arr) {
  const chunkSize = 4
  let result = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(...arr.slice(i, i + chunkSize).reverse())
  }
  return result
}

export default Decks
