import { useEffect, type ReactNode } from "react";
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
import { useStandby } from "../standby/useStandby";

const fakeLogin = async (props: LoginProps): Promise<AuthData> => {
  return {
    user: { name: props.username },
    status: "logged-in",
  };
};

const fakeLogout = async (): Promise<LogoutData> => {
  return { message: "logged-out" };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: env } = useEnv();
  const { network } = useAppConfig();
  const { isStandby } = useStandby();
  const queryClient = useQueryClient();

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
      login.reset();
      return network().then(fakeLogout);
    },
  });

  useEffect(() => {
    if (isStandby) {
      logout.mutate();
    }
  }, [isStandby, logout]);

  useEffect(() => {
    if (!login.data) {
      queryClient.resetQueries({ queryKey: ["account"] });
      queryClient.resetQueries({ queryKey: ["vod"] });
    }
  }, [login.data, queryClient]);
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
