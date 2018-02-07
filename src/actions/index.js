import {ADD_CARD, UPDATE_BOARD, REMOVE_CARD} from '../utils/actionTypes'

export function addCard (payload)  {
    return dispatch => dispatch({type:ADD_CARD, payload})
}

export function removeCard(status,index){
    return dispatch=> dispatch({type:REMOVE_CARD,status,index})
}

export const updateBoard = (type = "ADDCARD", payload) => dispatch => {
    return dispatch({type, payload})
}