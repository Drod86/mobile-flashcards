import { getData } from '../utils/api'
import { receiveUsers, setAuthedUser } from './users'
import { receiveDecks } from './decks'
import { receiveCards } from './cards'

export function handleInitialData () {
	return (dispatch) => {
		return getData('STORE')
			.then(({ users }) => {
				dispatch(receiveUsers(users))
			})
	}
}

export function handleAuthedUserData (key) {
	return (dispatch) => {
		return getData(key === undefined ? 'STORE': key)
			.then(({ authedUser, cards, decks }) => {
				dispatch(setAuthedUser(user))
				dispatch(receiveDecks(users))
				dispatch(receiveCards(users))
			})
	}
}