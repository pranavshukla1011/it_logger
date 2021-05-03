import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../types';
import axios from 'axios';

//getting logs
export const getLogs = () => async (dispatch) => {
  try {
    const res = await axios.get('/logs');
    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

//set loading to true
export const setLoading = () => {
  dispatch({
    type: SET_LOADING,
  });
};
