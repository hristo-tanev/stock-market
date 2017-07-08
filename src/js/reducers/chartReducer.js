const initialState = {
  information: [],
  busy: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CONTENT_REQUEST': {
      return Object.assign({}, state, { busy: true })
    }
    case 'CONTENT_SUCCESS': {
      const { information } = action.payload
      return Object.assign({}, state, { busy: false, information })
    }
    case 'CONTENT_FAIL': {
      return initialState
    }
    case 'REMOVE_CONTENT': {
      return initialState
    }
  }
  return state
}
