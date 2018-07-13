import axios from '../../axiosInstance'

export const GET_FILE = 'GET_FILE'
export const GET_FILES = 'GET_FILES'
export const UPDATE_FILE = 'UPDATE_FILE'
export const CREATE_FILE = 'CREATE_FILE'
export const DELETE_FILE = 'DELETE_FILE'

const getFile = file => ({
  type: GET_FILE,
  file
})

export const getFileAsync = () => dispatch => {
  axios.get('/files').then(response => {
    dispatch(getFile(response))
  })
}

const getFiles = files => ({
  type: GET_FILES,
  files
})

export const getFilesAsync = () => dispatch => {
  axios.get('/files').then(response => {
    dispatch(getFiles(response))
  })
}

const updateFile = file => ({
  type: UPDATE_FILE,
  file
})

export const updateFileAsync = () => dispatch => {
  axios.get('/files/{id}').then(response => {
    dispatch(updateFile(response))
  })
}

const createFile = file => ({
  type: CREATE_FILE,
  file
})

export const createFileAsync = () => dispatch => {
  axios.get('/files').then(response => {
    dispatch(createFile(response))
  })
}

const deleteFile = file => ({
  type: DELETE_FILE,
  file
})

export const deleteFileAsync = () => dispatch => {
  axios.get('/files/{id}').then(response => {
    dispatch(deleteFile(response))
  })
}
