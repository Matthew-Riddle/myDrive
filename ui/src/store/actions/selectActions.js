export const GET_FILE_SELECTED = 'GET_FILE_SELECTED'

const getFileSelected = file => ({
  type: GET_FILE_SELECTED,
  file
})

export const getFileSelectedAsync = file => dispatch => {
  dispatch(getFileSelected(file))
}
