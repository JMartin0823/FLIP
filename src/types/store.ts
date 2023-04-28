import {LogInInfo, User, UserWithPassword} from "./users"
import {Post} from "./posts";

export type AppState = {
    user: User | null,
    posts: Post[]
}

export type Observer = ({ render: () => void } & HTMLElement);

// ACTIONS

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

// INTERFACES

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: User
}

export type Actions = LogInAction;