import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer, Screens } from "../types/store";
import { reducer } from "./reducer";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { navigate, setUserCredentials, } from "./actions";

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     user.email !== null ? dispatch(setUserCredentials(user.email)) : '';
//     dispatch(navigate(Screens.HOMEPAGE));
//   } else {
//     dispatch(navigate(Screens.LOGIN));
//   }
// });

const emptyState: AppState = {
  screen: Screens.LOGIN,
  user: {idUser: "", username: "", email: ""},
  posts: [],
  };

export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: Actions) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};
