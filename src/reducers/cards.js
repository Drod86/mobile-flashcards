import { ADD_CARD, REMOVE_CARD,RECEIVE_CARDS }  from '../actions/cards'

export default function cards (state = {}, action) {
  switch (action.type) {
    case RECEIVE_CARDS :
      return {
        ...state,
        ...action.cards
      }
    case ADD_CARD :
      return {...state, ...action.card}
    case REMOVE_CARD :
      /*let copyState = JSON.parse(JSON.stringify(state))
      delete copyState[action.id.id]
      return copyState*/
      return state.filter(q => q.id !== action.id.id)
    default :
      return state
  }
}