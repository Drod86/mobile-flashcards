import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, store) => {
  try {
    const jsonValue = JSON.stringify(store)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    alert('Store was not updated. Try again')
  }
}


export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
    	console.log(JSON.parse(value))
    	return JSON.parse(value)

    } else { return null}
  } catch(e) {
    // error reading value
    	alert('nope')
  }
}

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}

export const mergeStore = async (store) => {
	try {
		await AsyncStorage.mergItem('STORE', JSON.stringify(store))
	} catch (e) {
    alert('Store was not updated. Try again')
  }
}

export const getDecks = async () => {

}

export const getDeck = async (id) => {

}

export const saveDeckTitle = async (title) => {

}

export const addCardToDeck = async (title, card) => {

}