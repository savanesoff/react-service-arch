import React from "react";
import { useQuery } from "@tanstack/react-query";
import { StandbyContext, type StandbyData } from "./StandbyContext";

const fetchStandby = async (): Promise<StandbyData> => {
  await new Promise((r) => setTimeout(r, 300));
  return { standby: false };
};

export const StandbyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const query = useQuery({ queryKey: ["standby"], queryFn: fetchStandby });
  return (
    <StandbyContext.Provider value={query}>{children}</StandbyContext.Provider>
  );
};
