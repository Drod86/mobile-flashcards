import { ADD_QUESTION, REMOVE_QUESTION }  from '../actions/cards'
import { ADD_DECK, REMOVE_DECK }  from '../actions/decks'

export default function decks (state = {}, action) {
  switch (action.type) {
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
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.deck] : {
          ...state[action.question.deck],
          cards : [...state[action.question.deck].cards, ...[action.question.id]]
        }
      }
    case REMOVE_QUESTION :
      return {
        ...state,
        [action.id.deck] : {
          ...state[action.id.deck],
          cards : state[action.id.deck].cards.filter(c => c !== action.id.id)
        }
      }
    default :
      return state
  }
}