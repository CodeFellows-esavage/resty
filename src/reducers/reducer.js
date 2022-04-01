export const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: [],
}

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_REQ_PARAMS':
      return { ...state, requestParams: action.payload };
    case 'UPDATE_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'UPDATE_HISTORY':
      return { ...state, history: [...state.history, action.payload] }  
    default:
      return state;
  }
}
