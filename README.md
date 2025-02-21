# Learning Cards

This is a simple Vite/React app that allows reviewing and printing flip cards. The cards will be printed to a 4 x 4 grid on an A4 page. The resulting cards will be A6 sized.

You may define arrays (decks of cards) containing the questions and answers. The currently included decks cover the basic arithmetic operations `+`, `-`, `×` and `÷` for the numbers 1 to 20.

Simply run
```sh
npm run dev
```
and connect to the service using a web browser to view. To change the current deck set the `deckId` in `./App.jsx`.

To print the cards just hit `Ctrl` + `p` and select landscape. After printing the questions pages reverse the page stack (if the first page is at the bottom), place it back into the printer and print the answers pages.

## Data structures
The available decks are declared in `./Decks.jsx`. The `getCards()` function defined for every deck is used to generate the card content, retrieve the data from a prepared JSON or transform/import data from another format.

Note, when printing the pages for the answers the card order of each row is inverted (e.g. the left-most card becomes the right-most card after the page is flipped). `./Decks.js` has a helper function `reverseRows()` that can be used to adapt a given answers array accordingly.

### Deck
```js
{
  id: string, // unique identifier for the deck
  title: string, // title of the deck
  getCards: Function // returns array of cards
}
```

### Card
```js
{
  image?: string, // link to optional image
  value: string // string value to show on card
}
```
