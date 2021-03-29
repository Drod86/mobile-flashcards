import { getData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveDecks } from './decks'
import { receiveCards } from './cards'
import { createDraftSafeSelector } from '@reduxjs/toolkit'

export function handleInitialData () {
	return (dispatch) => {
		return getData('STORE')
			.then((r) => {
				dispatch(receiveUsers(r))
			})
	}
}

export function handleAuthedUserData (key) {
	return (dispatch) => {
		return getData(key) !== null 
			? getData(key)
				.then((result) => {
					console.log('handleAuthed', result)
					dispatch(receiveDecks(result.decks))
					dispatch(receiveCards(result.cards))
			  }).catch(e => console.log(e))
			: console.log('testing12312312')
	}
}