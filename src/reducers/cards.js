import { ADD_QUESTION, REMOVE_QUESTION }  from '../actions/cards'

export default function cards (state = [], action) {
  switch (action.type) {
    case ADD_QUESTION :
      return [...state, ...[action.question]]
    case REMOVE_QUESTION :
      /*let copyState = JSON.parse(JSON.stringify(state))
      delete copyState[action.id.id]
      return copyState*/
      return state.filter(q => q.id !== action.id.id)
    default :
      return state
  }
}