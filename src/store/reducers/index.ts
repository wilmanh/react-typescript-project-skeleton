import { combineReducers } from "redux";
import Reducers from "./reducer";
import AuthReducers from "./auth.reducer";

import sessionStorage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

export const persistDataAuthConfig = {
  key: "auth",
  storage: sessionStorage,
  transform: ["encrypt"],
};

export const reducers = combineReducers({
  Reducers,
  AuthReducers: persistReducer(persistDataAuthConfig, AuthReducers),
});

export type RootState = ReturnType<typeof reducers>;
