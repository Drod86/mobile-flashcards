export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function removeQuestion (id) {
  return {
    type: REMOVE_QUESTION,
    id
  }
}