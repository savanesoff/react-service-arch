import { createContext } from "react";
import type { UseMutationResult } from "@tanstack/react-query";

export type LoginProps = {
  username: string;
  password: string;
};
export type LoginError = {
  message: string;
  code?: string;
};
export type LogoutError = {
  message: string;
  code?: string;
};
export type AuthData = { user: { name: string }; status: string };
export type LogoutData = { message: string; code?: string };
export type AuthContextValue = {
  login: UseMutationResult<AuthData, LoginError, LoginProps>;
  logout: UseMutationResult<LogoutData, LogoutError, void>;
  data?: AuthData;
  busy: boolean;
};
export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);
