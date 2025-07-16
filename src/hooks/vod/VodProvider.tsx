import React from "react";
import { useQuery } from "@tanstack/react-query";
import { VodContext, type VodData } from "./VodContext";
import { useAuth } from "../auth/useAuth";

const fetchVod = async (auth: { status: string }): Promise<VodData> => {
  await new Promise((r) => setTimeout(r, 300));
  if (auth?.status !== "logged-in") return { vod: [] };
  return { vod: ["Movie 1", "Movie 2"] };
};

export const VodProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const authData = auth.data;
  const query = useQuery({
    queryKey: ["vod", authData?.status],
    queryFn: () => fetchVod(authData ?? { status: "" }),
    enabled: !!authData,
  });
  return <VodContext.Provider value={query}>{children}</VodContext.Provider>;
};
