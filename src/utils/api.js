import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, store) => {
  try {
    const jsonValue = JSON.stringify(store)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    alert('Store was not updated. Try again')
    return e;
  }
}

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue !== null ? JSON.parse(jsonValue) : console.log('First entry')
  } catch(e) {
    return e;
  }

  console.log('Done.')
}

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    return e;
  }

  console.log('Done.')
}

export const mergeStore = async (key, store) => {
	try { 
		await AsyncStorage.mergeItem(key, JSON.stringify(store))
	} catch (e) {
    return e;
  }
}

export function generateID () {
  return Math.floor(Math.random()*Date.now()).toString(36).substring(2, 9)
}