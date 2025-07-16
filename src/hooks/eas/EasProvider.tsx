import React from "react";
import { useQuery } from "@tanstack/react-query";
import { EasContext, type EasData } from "./EasContext";
import { useAuth } from "../auth/useAuth";

const fetchEas = async (auth: { status: string }): Promise<EasData> => {
  await new Promise((r) => setTimeout(r, 300));
  if (auth?.status !== "logged-in") return { alerts: [] };
  return { alerts: ["Test Alert"] };
};

export const EasProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const authData = auth.data;
  const query = useQuery({
    queryKey: ["eas", authData?.status],
    queryFn: () => fetchEas(authData ?? { status: "" }),
    enabled: !!authData,
  });
  return <EasContext.Provider value={query}>{children}</EasContext.Provider>;
};
