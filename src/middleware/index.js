import { applyMiddleware } from 'redux'
import logger from './logger'
import thunk from 'redux-thunk'
import saveStore from './storage'


export default applyMiddleware(
	thunk,
	logger,
	saveStore
)
