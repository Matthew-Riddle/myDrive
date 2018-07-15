import * as actionTypes from '../actions'

const initialState = {}

const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILE_SELECTED:
      return {
        id: action.file.id,
        type: 'file',
        name: action.file.name
      }
    case actionTypes.GET_FOLDER_SELECTED:
      return {
        id: action.folder.id,
        type: 'folder',
        name: action.folder.name
      }
    default:
      return state
  }
}

export default selectReducer
