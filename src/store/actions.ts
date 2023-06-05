import { Screens } from "../types/store";
import PostsService from '../services/posts'
import { AddPostAction, GetPostsAction, PostsActions, AuthActions,  LogInAction, LogOutAction } from "../types/store"

export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};

export const setUserCredentials = (user: string) => {
  return {
    type: "SETUSER",
    payload: user,
  };
};


export const logOut = (): LogOutAction => {
  return {
      action: AuthActions.LOGOUT,
      payload: undefined
  };
};

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
  return {
      action: AuthActions.LOGIN,
      payload
  };
};

export const getPosts = async (): Promise<GetPostsAction> => {
  const trips = await PostsService.get();
  return {
      action: PostsActions.GET,
      payload: trips
  };
};

export const addNewPost = ({payload}: Pick<AddPostAction, "payload">): AddPostAction => {
  return {
      action: PostsActions.ADD,
      payload
  };
};