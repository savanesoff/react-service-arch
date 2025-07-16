import { createContext } from "react";
import type { UseQueryResult } from "@tanstack/react-query";

export type AuthData = { user: { name: string } | null; status: string };
export const AuthContext = createContext<UseQueryResult<AuthData> | undefined>(
  undefined
);
