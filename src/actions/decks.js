export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function removeDeck (id) {
  return {
    type: REMOVE_DECK,
    id
  }
}