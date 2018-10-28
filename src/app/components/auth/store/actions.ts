import { Action } from '@ngrx/store';
import * as actionTypes from './action-types';
import { RegisterUserModel } from '../models/register.user.model';


export class RegisterUser implements Action {
    type: string = actionTypes.REGISTER_USER;
    
    constructor(public payload: RegisterUserModel) { }
}

export class LoginUser { }