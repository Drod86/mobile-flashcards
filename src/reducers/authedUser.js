import { ADD_DECK, REMOVE_DECK }  from '../actions/decks'
import { SET_AUTHED_USER }  from '../actions/users'

export default function authedUser (state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.user
    case ADD_DECK :
      return {
        ...state,
        decks: [...state.decks, ...Object.keys(action.deck)]
      }
    case REMOVE_DECK :
      return {
        ...state,
        decks: state.decks.filter(id => id.localeCompare(action.id) !== 0)
      }
    default :
      return state
  }
}