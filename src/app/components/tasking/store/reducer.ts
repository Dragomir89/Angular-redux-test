import { ITodoState } from "./state";
import * as actionTypes from './action-types';


const initialState: ITodoState = {
    all: [{name:'default', description: 'default'}]
}

function getAllTodos (state: ITodoState, allTodos) {
    // return Object.assign({}, state, {
    //     all: allTodos
    // });
    return { ...state, all: allTodos }
}

function addNewTodo(state: ITodoState, newTodo) {
    const newTodos = [...state.all, newTodo]
    
    return {
        ...state,
        all: newTodos
    }
}

export function todosReducer(state: ITodoState = initialState, action) {
    switch (action.type) {
        
        case actionTypes.GET_ALL_TODOS:
            return getAllTodos(state, action.payload); 
    
        case actionTypes.ADD_TODO:
            console.log(addNewTodo(state, action.payload))
            return addNewTodo(state, action.payload);

        default:
           return state;
    }
}