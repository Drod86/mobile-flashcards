import { ADD_DECK, REMOVE_DECK }  from '../actions/decks'
import { RECEIVE_USERS, ADD_NEW_USER, REMOVE_USER }  from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_NEW_USER :
      const { user } = action
      return {
        ...state,
        [user.username]: user
      }
    case REMOVE_USER :
      let copyState = JSON.parse(JSON.stringify(state))
      delete copyState[action.id]
      return copyState
    case ADD_DECK :
      const { deck } = action
      return {
        ...state,
        [deck.author] : {
          ...state[deck.author],
          decks: [...state[deck.author].decks, ...[deck.name]]
        }
      }
    default :
      return state
  }
}