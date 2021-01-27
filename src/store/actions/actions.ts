import Action from "../../interfaces/actions.interface";
import * as actionTypes from "../actionTypes";

export const Add = (addNumber: number): Action => {
  return {
    type: actionTypes.ADD,
    payload: { addNumber },
  };
};

export const Remove = (removeNumber: number): Action => {
  return {
    type: actionTypes.REMOVE,
    payload: { removeNumber },
  };
};
