export interface BusinessI {
  id: number;
  name: string;
}

export interface AuthStateI {
  token: string;
  businesses: BusinessI[];
}

export interface SendCodeI {
  email: string;
  code?: string;
}

export const state: AuthStateI = {
  token: '',
  businesses: [],
};
