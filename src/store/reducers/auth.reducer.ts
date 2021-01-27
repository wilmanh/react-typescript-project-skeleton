import * as actionTypes from "../actionTypes";
import { AnyAction } from "redux";
import { AuthStateAxios } from "../../interfaces/reducer.interface";

const initialState: AuthStateAxios = {
  isLoggedIn: false,
  token: "",
  expires: 0,
  user: {
    name: "Usuario Invitado",
    email: "",
  },
};

const AxiosReducer = (
  state = initialState,
  action: AnyAction
): AuthStateAxios => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default AxiosReducer;
