export const GET_FILE_SELECTED = 'GET_FILE_SELECTED'
export const GET_FOLDER_SELECTED = 'GET_FOLDER_SELECTED'

const getFileSelected = file => ({
  type: GET_FILE_SELECTED,
  file
})
const getFolderSelected = folder => ({
  type: GET_FOLDER_SELECTED,
  folder
})

export const getFileSelectedAsync = file => dispatch => {
  dispatch(getFileSelected(file))
}
export const getFolderSelectedAsync = folder => dispatch => {
  dispatch(getFolderSelected(folder))
}
