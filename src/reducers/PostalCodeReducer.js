import {
    GET_POSTALCODE_INFO,
    GET_POSTALCODE_INFO_SUCCESS,
    GET_POSTALCODE_INFO_ERROR
}
    from '../types';

    const initialState = {
        info: [],
        error: false,
        loading: false
    }
    
    export default function (state = initialState, action) {
    
        switch (action.type) {
            case GET_POSTALCODE_INFO:
                return {
                    ...state,
                    info: [],
                    error: false,
                    loading: true
                }
            case GET_POSTALCODE_INFO_SUCCESS:
                return {
                    ...state,
                    info: action.payload,
                    error: false,
                    loading: false
                }
    
            case GET_POSTALCODE_INFO_ERROR:
                return {
                    ...state,
                    info: [],
                    error: true,
                    loading: false,
                }
    
            default:
                return state
    
        }
    }
    