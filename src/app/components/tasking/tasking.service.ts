import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { GetAllTodos, AddNewTodo } from './store/actions'
import { TodoModel } from "./models/todo.model";

@Injectable()
export class TaskingService {

    constructor(private store: Store<AppState>) {}

    getAll() {
        setTimeout(()=>{
            this.store.dispatch(new GetAllTodos([{name: 'task 01', description: 'go to work !'}]));
        },2000);
    }

    addNewTodo(newTodo: TodoModel) {
        setTimeout(() => {
            this.store.dispatch(new AddNewTodo(newTodo));
        }, 1000);
    }

}
