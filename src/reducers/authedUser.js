import { ADD_DECK, REMOVE_DECK }  from '../actions/decks'
import { SET_AUTHED_USER }  from '../actions/users'

export default function authedUser (state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.user
    case ADD_DECK :
      return {
        ...state,
        decks: [...state.decks, action.deck.name]
      }
    case REMOVE_DECK :
      return {
        ...state,
        decks: state.decks.filter(id => id.localeCompare(action.name) !== 0)
      }
    default :
      return state
  }
}