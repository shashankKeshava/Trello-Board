import {ADD_CARD, UPDATE_BOARD, REMOVE_CARD, EDIT_CARD} from '../utils/actionTypes'

export function addCard(payload) {
    return dispatch => dispatch({type: ADD_CARD, payload})
}

export function removeCard(status, index) {
    return dispatch => dispatch({type: REMOVE_CARD, status, index})
}

export function editCard(status, index, msg) {
    return dispatch => ({type: EDIT_CARD, status, index, msg})
}

export const updateBoard = (type = "ADDCARD", payload) => dispatch => {
    return dispatch({type, payload})
}