import * as actionTypes from '../actions'

const initialState = {
  files: []
}

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILE:
      return {
        ...state,
        files: action.file
      }
    case actionTypes.GET_FILES:
      return {
        ...state,
        files: [...state.files, ...action.files]
      }
    case actionTypes.UPDATE_FILE:
      return {
        ...state,
        files: state.files.map(
          file => (file.id === action.file.id ? action.file : file)
        )
      }
    case actionTypes.CREATE_FILE:
      return {
        ...state,
        files: [...state.files, action.file]
      }
    case actionTypes.ARCHIVE_FILE:
      return {
        ...state,
        files: state.files.map(
          file => (file.id === action.file.id ? action.file : file)
        )
      }
    case actionTypes.DELETE_FILE:
      return {
        ...state,
        files: [...state.files.filter(file => file.id !== action.id)]
      }
    default:
      return state
  }
}

export default fileReducer
