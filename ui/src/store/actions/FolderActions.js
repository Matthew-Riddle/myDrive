import axios from '../../axios-instance'

export const GET_FOLDER = 'GET_FOLDER'
export const GET_FOLDERS = 'GET_FOLDERS'
export const UPDATE_FOLDER = 'UPDATE_FOLDER'
export const CREATE_FOLDER = 'CREATE_FOLDER'
export const DELETE_FOLDER = 'DELETE_FOLDER'

const getFolder = folder => ({
  type: GET_FOLDER,
  folder
})

export const getFolderAsync = () => dispatch => {
  axios.get('/folder/{id}').then(response => {
    dispatch(getFolder(response))
  })
}

const getFolders = folders => ({
  type: GET_FOLDERS,
  folders
})

export const getFoldersAsync = () => dispatch => {
  axios.get('/folder').then(response => {
    dispatch(getFolders(response))
  })
}

const updateFolder = folder => ({
  type: UPDATE_FOLDER,
  folder
})

export const updateFolderAsync = () => dispatch => {
  axios.get('/folder/{id}').then(response => {
    dispatch(updateFolder(response))
  })
}

const createFolder = folder => ({
  type: CREATE_FOLDER,
  folder
})

export const createFolderAsync = () => dispatch => {
  axios.get('/folder').then(response => {
    dispatch(createFolder(response))
  })
}

const deleteFolder = folder => ({
  type: DELETE_FOLDER,
  folder
})

export const deleteFolderAsync = () => dispatch => {
  axios.get('/folder/id').then(response => {
    dispatch(deleteFolder(response))
  })
}
