import { TodoAction, TodoActionTypes } from './../../types/todo';
import axios from "axios";
import { Dispatch } from "redux";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODO})
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: res.data})
        } catch (error) {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: "Ошибка загрузки списка дел FETCH_TODO_ERROR"
            })
        }
    }
}

export function getTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}