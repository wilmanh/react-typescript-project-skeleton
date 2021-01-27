import * as actionTypes from "../actionTypes";
import { AnyAction } from "redux";
import InitialStateNormal from "../../interfaces/reducer.interface";

const initialState: InitialStateNormal = {
  sum: 0,
  name: "",
};

const NormalReducer = (
  state = initialState,
  action: AnyAction
): InitialStateNormal => {
  switch (action.type) {
    case actionTypes.ADD:
      console.log(actionTypes.ADD);
      return {
        ...state,
        sum: state.sum + action.payload?.addNumber,
      };
    case actionTypes.REMOVE:
      console.log(actionTypes.REMOVE);
      return {
        ...state,
        sum: state.sum - action.payload?.removeNumber,
      };
    default:
      return state;
  }
};

export default NormalReducer;
