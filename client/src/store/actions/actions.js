import axios from 'axios';
import { FETCH_MAIN, FETCH_STATISTIC, ERROR } from '../actionType/actionType';
const database = 'http://localhost:5000';

export const getAll = () => async dispatch => {
    try {
        const response = await axios.get(`${database}/edea/main`);
        dispatch({
            type: FETCH_MAIN,
            data: response.data
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            data: error.message
        })
    }
}

export const getStatistic = () => async dispatch => {
    try {
        const response = await axios.get(`${database}/edea/statistic`);
        dispatch({
            type: FETCH_STATISTIC,
            data: response.data
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            data: error.message
        })
    }
} 