export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function addUser (user) {
  return {
    type: ADD_USER,
    user,
  }
}

export function removeUser (id) {
  return {
    type: REMOVE_USER,
    id,
  }
}

export function setAuthedUser (user
  ) {
  return {
    type: SET_AUTHED_USER,
    user
  }
}