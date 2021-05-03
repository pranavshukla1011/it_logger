import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return;
    default:
      return state;
  }
};

export default rootReducer;
