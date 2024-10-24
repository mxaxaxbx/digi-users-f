export interface BusinessI {
  id: number;
  name: string;
}

export interface PermissionI {
  id: number;
  name: string;
  resourceID: number;
  resourceName: string;
}

export interface UserI {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isActive: boolean;
  resetPassword: boolean;
  lang: string;
  twoFactors: boolean;
}

export interface AuthStateI {
  token: string;
  businesses: BusinessI[];
  permissions: PermissionI[];
  user?: UserI;
}

export interface SendCodeI {
  email: string;
  code?: string;
  app?: string;
}

export const state: AuthStateI = {
  token: '',
  businesses: [],
  permissions: [],
};
