import {Actions, AppState, AuthActions} from "../types/store";


export const reducer = (currentAction: Actions, currentState: AppState): AppState => {

    const { action, payload } = currentAction;

    switch (action) {
        case AuthActions.LOGIN:
            return {
                ...currentState,
                user: payload
            }

        default:
            return currentState;
    }


}