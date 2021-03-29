export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'

export function receiveCards (cards) {
  return {
    type: RECEIVE_CARDS,
    cards
  }
}

export function addCard (card) {
  return {
    type: ADD_CARD,
    card
  }
}

export function removeCard (id) {
  return {
    type: REMOVE_CARD,
    id
  }
}