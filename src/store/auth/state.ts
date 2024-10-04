export interface AuthStateI {
  token: string;
}

export interface SendCodeI {
  phone: string;
}

export const state: AuthStateI = {
  token: '',
};
