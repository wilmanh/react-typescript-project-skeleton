import * as actionTypes from "../actionTypes";
import Axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import Action from "../../interfaces/actions.interface";

const set = (data: string): Action => {
  return {
    type: actionTypes.LOGIN,
    payload: { data },
  };
};

const setFailed = (): Action => {
  return {
    type: actionTypes.LOGIN_FAILED,
  };
};

export type MyThunkResult<R> = ThunkAction<R, Action, {}, AnyAction>;

const Login = (): MyThunkResult<Promise<void>> => {
  return async (
    dispatch: ThunkDispatch<Action, {}, AnyAction>
  ): Promise<void> => {
    await Axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        dispatch(set(response.data));
      })
      .catch((error) => {
        dispatch(setFailed());
      });
  };
};

export default Login;
