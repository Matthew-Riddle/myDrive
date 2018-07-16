import axios from '../../axiosInstance'

export const GET_FILE = 'GET_FILE'
export const GET_FILES = 'GET_FILES'
export const UPDATE_FILE = 'UPDATE_FILE'
export const CREATE_FILE = 'CREATE_FILE'
export const DELETE_FILE = 'DELETE_FILE'
export const ARCHIVE_FILE = 'ARCHIVE_FILE'

const getFile = file => ({
  type: GET_FILE,
  file
})

export const getFileAsync = () => dispatch => {
  axios.get('/files').then(response => {
    dispatch(getFile(response.data))
  })
}

const getFiles = files => ({
  type: GET_FILES,
  files
})

export const getFilesAsync = () => dispatch => {
  axios.get('/files').then(response => {
    dispatch(getFiles(response.data))
  })
}

const updateFile = file => ({
  type: UPDATE_FILE,
  file
})

export const updateFileAsync = (id, data) => dispatch => {
  console.log(id)
  axios.put(`/files/${id}`, data).then(response => {
    dispatch(updateFile(response.data))
  })
}

const createFile = file => ({
  type: CREATE_FILE,
  file
})

export const createFileAsync = data => dispatch => {
  axios
    .post('/files', data, {
      headers: { 'content-type': 'multipart/form-data' }
    })
    .then(response => {
      dispatch(createFile(response.data))
    })
}

const archiveFile = file => ({
  type: ARCHIVE_FILE,
  file
})

export const archiveFileAsync = id => dispatch => {
  axios.delete(`/files/${id}`).then(response => {
    dispatch(archiveFile(response.data))
  })
}

const deleteFile = id => ({
  type: DELETE_FILE,
  id
})

export const deleteFileAsync = id => dispatch => {
  axios.delete(`/files/${id}`).then(response => {
    dispatch(deleteFile(response.data.id))
  })
}
