import { Component } from '@angular/core';
import { TaskingService } from '../tasking.service';
import { TodoModel } from '../models/todo.model';

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html'
})

export class AddTodo {
    public newTodo: TodoModel = {
        name:'',
        description: ''
    }
    
    constructor(private service: TaskingService) { }

    addTodo() {
        this.service.addNewTodo(this.newTodo);
        this.newTodo = {name: '', description:''};    
    }

}
