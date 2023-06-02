import { Post } from "./posts";
import { User } from "./user";

export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  HOMEPAGE = "HOMEPAGE",
  PROFILE = "PROFILE",
  EDITPROFILE = "EDITPROFILE",
  CREATEPAGE = "CREATEPAGE",
}

export type AppState = {
  screen: Screens;
  user: User;
  posts: Post[];
};

export enum UserActions {
  "ADD" = "ADD",
  "GET" = "GET",
}

export enum NavigationActions {
  "NAVIGATE" = "NAVIGATE",
}

export interface AddUserAction {
  action: UserActions.ADD,
  payload: User
}

export interface GetUserAction {
  action: UserActions.GET,
  payload: User[]
}

export interface NavigateAction {
  action: NavigationActions.NAVIGATE;
  payload: Screens;
}

export type Actions = NavigateAction;