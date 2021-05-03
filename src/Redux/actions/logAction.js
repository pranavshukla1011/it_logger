import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../types';
import axios from 'axios';

//getting logs
export const getLogs = () => async (dispatch) => {
  try {
    console.log('fetching logs');
    const res = await axios.get('/logs');
    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.message,
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
