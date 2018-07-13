import * as actionTypes from '../actions/'

const initialState = {
  files: [],
  file: {}
}

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILE:
      return {
        ...state,
        file: action.file
      }
    case actionTypes.GET_FILES:
      return {
        ...state,
        files: [...state.files, ...action.files]
      }
    case actionTypes.UPDATE_FILE:
      return {
        ...state,
        file: action.file
      }
    case actionTypes.CREATE_FILE:
      return {
        ...state,
        file: action.file
      }
    case actionTypes.DELETE_FILE:
      return {
        ...state,
        file: action.file
      }
    default:
      return state
  }
}

export default fileReducer
