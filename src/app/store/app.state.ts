import { ITodoState } from '../components/tasking/store/state';
import IUserState from '../components/auth/store/state';

export interface AppState { 
    todosReducer: ITodoState,
    authReducer: IUserState
}