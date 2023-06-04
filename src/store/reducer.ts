
import { Actions, AppState, PostsActions,  } from "../types/store";

export const reducer = (action: any, prevState: any) => {
  switch (action.type) {
    case "NAVIGATE":
      prevState.screen = action.payload;
      break;

      case "SETUSER":
      prevState.user = action.payload;
      break;
  }

  return prevState;
};



export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction;

    switch (action) {
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
}