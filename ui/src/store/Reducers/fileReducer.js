import * as actionTypes from '../actions/'

const initialState = {
  files: []
}

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILE:
      return {
        ...state,
        files: action.files
      }
    case actionTypes.GET_FILES:
      return {
        ...state,
        files: action.files
      }
    case actionTypes.UPDATE_FILE:
      return {
        ...state,
        files: action.files
      }
    case actionTypes.CREATE_FILE:
      return {
        ...state,
        files: action.files
      }
    case actionTypes.DELETE_FILE:
      return {
        ...state,
        files: action.files
      }
    default:
      return state
  }
}

export default fileReducer
