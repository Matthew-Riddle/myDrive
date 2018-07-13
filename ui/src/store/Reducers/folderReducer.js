import * as actionTypes from '../actions/'

const initialState = {
  folders: [],
  folder: {}
}

const folderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FOLDER:
      return {
        ...state,
        folder: action.folder
      }
    case actionTypes.GET_FOLDERS:
      return {
        ...state,
        files: [...state.folders, ...action.folders]
      }
    case actionTypes.UPDATE_FOLDER:
      return {
        ...state,
        folder: action.folder
      }
    case actionTypes.CREATE_FOLDER:
      return {
        ...state,
        files: [...state.folders, ...action.folders]
      }
    case actionTypes.DELETE_FOLDER:
      return {
        ...state,
        folder: action.folder
      }
    default:
      return state
  }
}

export default folderReducer
