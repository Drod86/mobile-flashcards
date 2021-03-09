import { combineReducers } from 'redux'

import authedUser from './authedUser'
import cards from './cards'
import users from './users'
import decks from './decks'

export default combineReducers({
	authedUser,
	cards,
	users,
	decks,
})
