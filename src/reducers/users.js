import { ADD_DECK, REMOVE_DECK }  from '../actions/decks'
import { ADD_USER, REMOVE_USER }  from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case ADD_USER :
      return {...state, ...action.user}
    case REMOVE_USER :
      let copyState = JSON.parse(JSON.stringify(state))
      delete copyState[action.id]
      return copyState
    default :
      return state
  }
}