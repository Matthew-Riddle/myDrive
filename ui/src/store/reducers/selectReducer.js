import * as actionTypes from '../actions'

const initialState = {}

const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILE_SELECTED:
      return {
        id: action.file.id,
        type: 'file',
        name: action.file.name,
        deleted: action.file.deleted,
        fileSize: action.file.fileSize,
        contentType: action.file.contentType
      }
    case actionTypes.GET_FOLDER_SELECTED:
      return {
        id: action.folder.id,
        type: 'folder',
        name: action.folder.name,
        deleted: action.folder.deleted
      }
    case actionTypes.GET_NONE_SELECTED:
      return {}
    default:
      return state
  }
}

export default selectReducer
