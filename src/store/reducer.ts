import { Actions, AppState, PostsActions, AuthActions } from "../types/store";

export const reducer = (action: any, prevState: any, currentAction: Actions, currentState: AppState): AppState => {
  const { payload } = currentAction;
  switch (action.type) {
    case "NAVIGATE":
      prevState.screen = action.payload;
      break;

      case "SETUSER":
      prevState.user = action.payload;
      break;

      case AuthActions.LOGIN:
        return {
            ...currentState,
            user: payload.user
        }

    case AuthActions.LOGOUT:
        return {
            ...currentState,
            user: {
                userName: "",
                email: ""
            }
        }
      case PostsActions.ADD:
        return {
            ...currentState,
            trips: [
                payload,
                ...currentState.posts,
            ]
        }

    case PostsActions.GET:
        return {
            ...currentState,
            posts: payload
        }


    default:
        return currentState;
  }

  return prevState;
};
