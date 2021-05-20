import { ERROR, FETCH_MAIN, FETCH_STATISTIC } from '../actionType/actionType';

const initState = {
    orders: [],
    statistic: null,
    error: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_MAIN:
            return {
                ...state,
                orders: action.data,
                isLoading: false
            }
        case FETCH_STATISTIC:
            return {
                ...state,
                statistic: action.data,
                isLoading: false
            }
        case ERROR:
            return {
                ...state,
                error: action.data
            }
        default: return state;
    }
}

export default reducer;