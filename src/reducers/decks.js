import { ADD_CARD, REMOVE_CARD }  from '../actions/cards'
import { ADD_DECK, REMOVE_DECK, RECEIVE_DECKS }  from '../actions/decks'

export default function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      const { deck } = action
      return {
        ...state,
        [deck.name]: deck
      }
    case REMOVE_DECK :
      let copyState = JSON.parse(JSON.stringify(state))
      delete copyState[action.id]
      return copyState
    case ADD_CARD :
      return {
        ...state,
        [action.card.deck] : {
          ...state[action.card.deck],
          cards : [...state[action.card.deck].cards, ...[action.card.id]]
        }
      }
    case REMOVE_CARD :
      return {
        ...state,
        [action.id.deck] : {
          ...state[action.id.deck],
          cards : [...state[action.id.deck].cards].filter(c => c !== action.id.id)
        }
      }
    default :
      return state
  }
}