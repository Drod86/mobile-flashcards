import { SET_AUTHED_USER } from '../actions/users'
import { storeData, mergeStore, getData } from '../utils/api'

/*const saveStore = (store) => (next) => (action) => {
		const result = next(action)
		Object.keys(store.getState().authedUser).length === 0 && action.type.localeCompare('SET_AUTHED_USER') !== 0 
			? storeData('STORE', store.getState().users) 
			: action.type.localeCompare('SET_AUTHED_USER') === 0 
				? storeData(action.user.username, store.getState()) 
				: storeData(store.getState().authedUser.username, store.getState())
	return result
}*/

const saveStore = (store) => (next) => (action) => {
	const result = next(action)
	const logedIn = Object.keys(store.getState().authedUser).length
	const users = store.getState().users
	const authed = store.getState().authedUser.username
	getData('STORE').then((r) => {
		r === null 
		? storeData('STORE', store.getState().users) 
		: logedIn === 0 
			? console.log('nothing to merge')
			: storeData('STORE', users) && action.type !== SET_AUTHED_USER ? storeData(authed, store.getState()) : mergeStore(authed, store.getState())
	})
	//console.log('what', Object.keys(store.getState().authedUser).length)
	

	return result
}

export default saveStore