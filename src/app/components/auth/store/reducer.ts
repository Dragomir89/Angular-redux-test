import { Action } from "@ngrx/store";
import * as actionTypes from './action-types';
import IUserState from "./state";

const initialState: IUserState = {
    email: 'test@test.abv.bg',
    username: 'peshho'
}

export function authReducer(state: IUserState = initialState, action) : IUserState {

    switch (action.type) {
        case actionTypes.REGISTER_USER:
            console.log(action)
            return {
                email: action.payload.email,
                username: action.payload.username
            }
    
        default:
            return state
    }
}
