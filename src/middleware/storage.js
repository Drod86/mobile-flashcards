import { SET_AUTHED_USER } from '../actions/users'
import { storeData, mergeStore, getData } from '../utils/api'

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
	return result
}

export default saveStore