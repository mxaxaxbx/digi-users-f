export interface AuthStateI {
  token: string;
}

export interface SendCodeI {
  email: string;
  code?: string;
}

export const state: AuthStateI = {
  token: '',
};
