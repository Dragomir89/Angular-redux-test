import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from "@angular/core";
import { TaskingService } from "./tasking.service";
import { AddTodo } from "./add-todo/add-todo.component";
import { ListTodo } from "./list-todo/list-todo.component";
import { MainTasking } from "./main-tasking/main.tasking.component";

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AddTodo, ListTodo, MainTasking],
    imports: [FormsModule, BrowserModule],
    providers: [TaskingService],
    exports: [MainTasking]
})


export class TaskingModule { }