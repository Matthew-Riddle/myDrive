import * as actionTypes from '../actions/'

const initialState = {
  folders: []
}

const folderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FOLDER:
      return {
        ...state,
        files: action.folders
      }
    case actionTypes.GET_FOLDERS:
      return {
        ...state,
        files: action.folders
      }
    case actionTypes.UPDATE_FOLDER:
      return {
        ...state,
        files: action.folders
      }
    case actionTypes.CREATE_FOLDER:
      return {
        ...state,
        files: action.folders
      }
    case actionTypes.DELETE_FOLDER:
      return {
        ...state,
        files: action.folders
      }
    default:
      return state
  }
}

export default fileReducer
