import { Component, OnInit } from "@angular/core";
import { RegisterUserModel } from "../models/register.user.model";
import { RegisterService } from "../register.service";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { Observable } from "rxjs";
import IUserState from "../store/state";

@Component({
    selector: 'app-register',
    templateUrl: 'register.user.component.html'
})

export class Register implements OnInit{
    public registerUser: RegisterUserModel;
    private user: Observable<IUserState>;
    public registerUserForm = {
        firstName: '',
        username: '',
        email: '',
        age: 0,
        password: '',
        confirmPassword: ''
    }

    constructor(
        private service: RegisterService, 
        private store: Store<AppState>) { 
        
    }

    ngOnInit() {
        this.store.subscribe((state)=>{
            console.log(state)
        })
    }

    register() {

        this.registerUser = {
            username:'test', 
            email:'test email', 
            firstName: 'test first name',
            age:10, 
            password:'asdasdas'};
        this.service.register(this.registerUser);
    }

}