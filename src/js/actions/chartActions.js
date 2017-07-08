import axios from 'axios'

export const contentRequest = () => ({ type: 'CONTENT_REQUEST' })
export const contentSuccess = (information) => ({ type: 'CONTENT_SUCCESS', payload: { information } })
export const contentFail = () => ({ type: 'CONTENT_FAIL' })

export const removeContent = () => ({ type: 'REMOVE_CONTENT' })

export function requestContent(name) {
  return (dispatch) => {
    const address = 'https://www.quandl.com/api/v3/datasets/WIKI/' + name + '.json'
    dispatch(contentRequest())
    axios.get(address)
    .then((response) => {
      dispatch(contentSuccess(response.data.dataset.data))
    })
    .catch((error) => {
      dispatch(contentFail())
    })
  }
}

export function contentRemove() {
  return (dispatch) => {
    dispatch(removeContent())
  }
}
