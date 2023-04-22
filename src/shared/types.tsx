export type NavLink = {
  id: number;
  name: string;
  href: string;
  active: boolean;
};

export type Admin = {
  id: number;
  username: string;
  email: string;
  phone: number;
  role: string;
};

export type AdminRegData = {
  username: string;
  email: string;
  phone: number;
  password: string;
  confirm_password: string;
};

export type AdminLoginData = {
  email: string;
  password: string;
};

export type AdminRegRes = {
  message: string;
  addedAdmin: Admin;
};
