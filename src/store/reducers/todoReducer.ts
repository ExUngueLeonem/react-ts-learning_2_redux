import { TodoAction, TodoActionTypes } from './../../types/todo';
const initialState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,

}


export const todoReducer = (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return { ...state }
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return { ...state }
        case TodoActionTypes.FETCH_TODO_ERROR:
            return { ...state }
        case TodoActionTypes.SET_TODO_PAGE:
            return { ...state }
        default:
            return state
    }
}