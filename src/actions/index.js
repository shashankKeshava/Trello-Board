import {
    ADD_CARD,
    REMOVE_CARD,
    EDIT_CARD,
    MOVE_VERTICAL,
    MOVE_HORIZONTAL,
} from '../utils/actionTypes';

export function addCard(payload) {
    return dispatch => dispatch({ type: ADD_CARD, payload });
}

export function removeCard(status, index) {
    return dispatch => dispatch({ type: REMOVE_CARD, status, index });
}

export function editCard(status, index, msg) {
    return dispatch => dispatch({ type: EDIT_CARD, status, index, msg });
}

export function moveCardVertical(status, currPos, nextPos) {
    return dispatch =>
        dispatch({ type: MOVE_VERTICAL, status, currPos, nextPos });
}

export function moveCardHorizontal(prevStatus, nextStatus, pos,index,status) {
    return dispatch =>
        dispatch({ type: MOVE_HORIZONTAL, prevStatus, nextStatus, pos,index,status });
}

