import { storeData } from '../utils/api'

const saveStore = (store) => (next) => (action) => {
		const result = next(action)
		Object.keys(store.getState().authedUser).length === 0 && action.type.localeCompare('SET_AUTHED_USER') !== 0 
			? storeData('STORE', store.getState()) 
			: action.type.localeCompare('SET_AUTHED_USER') === 0 
				? storeData(action.user.username, store.getState()) 
				: storeData(store.getState().authedUser.username, store.getState())
	return result
}

export default saveStore