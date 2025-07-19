import type { ReactNode } from "react";
import {
  AuthContext,
  type AuthData,
  type LoginError,
  type LoginProps,
  type LogoutData,
  type LogoutError,
} from "./AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppConfig } from "../AppConfig";

const fakeLogin = async (props: LoginProps): Promise<AuthData> => {
  return {
    user: { name: props.username },
    status: "logged-in",
  };
};

const fakeLogout = async (): Promise<LogoutData> => {
  return { message: "logged-out" };
};

export const AuthProvider = ({
  invalidateQueries = ["account"],
  children,
}: {
  children: ReactNode;
  invalidateQueries?: string[];
}) => {
  const queryClient = useQueryClient();
  const { network } = useAppConfig();

  // Login mutation
  const login = useMutation<AuthData, LoginError, LoginProps>({
    mutationKey: ["login"],
    mutationFn: async (props: LoginProps): Promise<AuthData> => {
      return network().then(() => {
        return fakeLogin(props);
      });
    },
    onSuccess: () => {
      // Invalidate queries after successful login if needed
      queryClient.invalidateQueries({
        queryKey: invalidateQueries,
      });
    },
  });

  // Logout mutation
  const logout = useMutation<LogoutData, LogoutError, void>({
    mutationKey: ["logout"],
    mutationFn: async (): Promise<LogoutData> => {
      login.reset(); // Reset login state
      // Invalidate login data by removing it from the cache
      queryClient.invalidateQueries({
        queryKey: invalidateQueries,
      });
      return network().then(fakeLogout);
    },
  });

  return (
    <AuthContext.Provider
      value={{
        data: login.data,
        busy: login.isPending || logout.isPending,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
