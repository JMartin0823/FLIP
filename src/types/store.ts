import { Post } from "./posts"

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    trips: any;

    user: {
      userName: string,
      email: string,
  },
  posts: Post[]
}

export enum Screens {
  LANDING = "LANDING",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  HOMEPAGE = "HOMEPAGE",
  PROFILE = "PROFILE",
  EDITPROFILE = "EDITPROFILE",
  CREATEPAGE = "CREATEPAGE",
}


export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

export enum PostsActions {
  "ADD" = "ADD",
  "GET" = "GET",
}
export interface LogInAction {
  action: AuthActions.LOGIN,
  payload: Pick<AppState, "user">
}

export interface LogOutAction {
  action: AuthActions.LOGOUT,
  payload: void
}


export interface AddPostAction {
  action: PostsActions.ADD,
  payload: Post
}

export interface GetPostsAction {
  action: PostsActions.GET,
  payload: Post[]
}
export type Actions = LogInAction | LogOutAction | AddPostAction | GetPostsAction;