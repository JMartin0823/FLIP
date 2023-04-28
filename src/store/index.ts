import {AppState, Observer, Actions} from "../types/store";
import Storage, { PersistanceKeys } from "../utils/storage";
import {User} from "../types/users";
import {Post} from "../types/posts";
import {reducer} from "./reducer";

const emptyState: AppState = {
    user: null,
    posts: []
}

let observers: Observer[] = [];

export const addObserver = (ref: Observer) => {
    observers = [...observers, ref];
};

const notifyObservers = () => observers.forEach((o) => o.render());

export let appState = Storage.get<AppState>({
    key: PersistanceKeys.STORE,
    defaultValue: emptyState,
});

export const dispatch = (action: Actions) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;

    persistStore(newState);
    notifyObservers();
};