import { Screens } from "../types/store";
import PostsService from '../services/posts'
import { AddPostAction, GetPostsAction, PostsActions } from "../types/store"


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



export const getPosts = async (): Promise<GetPostsAction> => {
  const trips = await PostsService.get();
  return {
      action: PostsActions.GET,
      payload: trips
  }
}

export const addNewPost = ({payload}: Pick<AddPostAction, "payload">): AddPostAction => {
  return {
      action: PostsActions.ADD,
      payload
  }
}