import * as actionTypes from '../actions'

const initialState = {}

const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILE_SELECTED:
      return {
        id: action.file.id,
        name: action.file.name
      }
    default:
      return state
  }
}

export default selectReducer
