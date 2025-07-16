import { useContext } from "react";
import { StandbyContext } from "./StandbyContext";

export const useStandby = () => {
  const ctx = useContext(StandbyContext);
  if (!ctx) throw new Error("useStandby must be used within StandbyProvider");
  return ctx;
};
