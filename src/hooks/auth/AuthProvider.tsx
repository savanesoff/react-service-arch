import React from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext, type AuthData } from "./AuthContext";
import { useEnv } from "../env/useEnv";
import { useStandby } from "../standby/useStandby";

const fetchAuth = async (env: string, standby: boolean): Promise<AuthData> => {
  await new Promise((r) => setTimeout(r, 300));
  if (standby) return { user: null, status: "standby" };
  if (env === "production")
    return { user: { name: "Sam" }, status: "logged-in" };
  return { user: null, status: "logged-out" };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const env = useEnv();
  const standby = useStandby();
  const envData = env.data;
  const standbyData = standby.data;
  const query = useQuery({
    queryKey: ["auth", envData?.env, standbyData?.standby],
    queryFn: () => fetchAuth(envData?.env ?? "", standbyData?.standby ?? false),
    enabled: !!envData && standbyData !== undefined,
  });
  return <AuthContext.Provider value={query}>{children}</AuthContext.Provider>;
};
