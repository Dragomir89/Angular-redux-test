import { RegisterUserModel } from "./models/register.user.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { RegisterUser } from "./store/actions";
import { Injectable } from "@angular/core";

@Injectable()
export class RegisterService {

    constructor(private store: Store<AppState>){ }

    register(user: RegisterUserModel) {
        console.log(user);
        setTimeout(()=>{
            this.store.dispatch(new RegisterUser(user))
        },2000);
    }
}