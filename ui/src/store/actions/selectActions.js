export const GET_FILE_SELECTED = 'GET_FILE_SELECTED'
export const GET_FOLDER_SELECTED = 'GET_FOLDER_SELECTED'
export const GET_NONE_SELECTED = 'GET_NONE_SELECTED'

const getFileSelected = file => ({
  type: GET_FILE_SELECTED,
  file
})

export const getFileSelectedAsync = file => dispatch => {
  dispatch(getFileSelected(file))
}

const getFolderSelected = folder => ({
  type: GET_FOLDER_SELECTED,
  folder
})

export const getFolderSelectedAsync = folder => dispatch => {
  dispatch(getFolderSelected(folder))
}

const getNoneSelected = () => ({
  type: GET_NONE_SELECTED
})

export const getNoneSelectedAsync = () => dispatch => {
  dispatch(getNoneSelected())
}
