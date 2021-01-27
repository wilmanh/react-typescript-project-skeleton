export default interface InitialStateNormal {
  sum: number;
  name: string;
}

export interface InitialStateAxios {
  data: any;
  failed: boolean;
}

export interface AuthStateAxios {
  token: string;
  expires: number;
  isLoggedIn: boolean;
  user?: {
    name: string;
    email: string;
  };
}
