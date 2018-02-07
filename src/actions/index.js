import {ADD_CARD, UPDATE_BOARD, REMOVE_CARD} from '../utils/actionTypes'

export function addCard (payload)  {
    return dispatch => dispatch({type:ADD_CARD, payload})
}

export const updateBoard = (type = "ADDCARD", payload) => dispatch => {
    return dispatch({type, payload})
}