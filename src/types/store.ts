import { Post } from "./posts"

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    trips: any;
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

export enum PostsActions {
  "ADD" = "ADD",
  "GET" = "GET",
}


export interface AddPostAction {
  action: PostsActions.ADD,
  payload: Post
}

export interface GetPostsAction {
  action: PostsActions.GET,
  payload: Post[]
}


export type Actions = AddPostAction | GetPostsAction;