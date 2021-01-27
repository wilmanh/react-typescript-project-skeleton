import Action from "./actions.interface";

export interface MapDispatchToPropsInterface {
  add: (addNumber: number) => Action;
  remove: (removeNumber: number) => Action;
}

export interface MapDispatchToPropsPublicInterface {
  login: () => Promise<void>;
}

export interface MapStateToPropsInterface {
  sum: number;
  name: string;
  isLoggedIn: boolean;
}
