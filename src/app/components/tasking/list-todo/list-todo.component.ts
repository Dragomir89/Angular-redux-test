import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from '../models/todo.model';
import { TaskingService } from '../tasking.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
    selector: 'list-todo',
    templateUrl: './list-todo.component.html'
})

export class ListTodo implements OnInit {
    todos: Observable<TodoModel[]>

    constructor(
        private todoService: TaskingService,
        private store: Store<AppState>
        ) { }

    ngOnInit() {
        this.todoService.getAll();
        this.store.subscribe(()=>{
            this.todos = this.store.pipe(select((state)=>{
                return state.todosReducer.all;
            }));
        })
    }
}