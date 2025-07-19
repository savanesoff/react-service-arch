import { type ReactNode } from "react";
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
import { useEnv } from "../env/useEnv";

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
  const { data: env } = useEnv();
  const { network } = useAppConfig();

  // Login mutation
  const login = useMutation<AuthData, LoginError, LoginProps>({
    mutationKey: ["login", env],
    mutationFn: async (props: LoginProps): Promise<AuthData> => {
      return network().then(() => {
        return fakeLogin(props);
      });
    },
  });

  // Logout mutation
  const logout = useMutation<LogoutData, LogoutError, void>({
    mutationKey: ["logout"],
    mutationFn: async (): Promise<LogoutData> => {
      const data = await network().then(fakeLogout);
      login.reset(); // Reset login state
      // Invalidate login data by removing it from the cache
      //   queryClient.invalidateQueries({
      //     queryKey: invalidateQueries,
      //   });
      queryClient.removeQueries({ queryKey: [...invalidateQueries, "login"] });
      return data;
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
