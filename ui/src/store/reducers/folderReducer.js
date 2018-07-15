import * as actionTypes from '../actions'

const initialState = {
  folders: []
}

const folderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FOLDER:
      return {
        ...state,
        folders: action.folder
      }
    case actionTypes.GET_FOLDERS:
      return {
        ...state,
        folders: [...state.folders, ...action.folders]
      }
    case actionTypes.UPDATE_FOLDER:
      return {
        ...state,
        folders: action.folders
      }
    case actionTypes.CREATE_FOLDER:
      return {
        ...state,
        folders: [...state.folders, action.folder]
      }
    case actionTypes.ARCHIVE_FOLDER:
      return {
        ...state,
        folders: state.folders.map(
          folder => (folder.id === action.folder.id ? action.folder : folder)
        )
      }
    case actionTypes.DELETE_FOLDER:
      return {
        ...state,

        folders: [...state.folders.filter(folder => folder.id !== action.id)]
      }
    default:
      return state
  }
}

export default folderReducer
