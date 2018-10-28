import * as actions from './action-types';
import { Action } from '@ngrx/store';
import { TodoModel } from '../models/todo.model';

export class GetAllTodos implements Action {
    public type: string = actions.GET_ALL_TODOS;

    constructor(public payload: TodoModel[]) { }
}

export class AddNewTodo implements Action {
    public type: string = actions.ADD_TODO;

    constructor(public payload: TodoModel) { } 
}