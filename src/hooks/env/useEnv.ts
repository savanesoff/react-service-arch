import { useContext } from "react";
import { EnvContext } from "./EnvContext";

export const useEnv = () => {
  const ctx = useContext(EnvContext);
  if (!ctx) throw new Error("useEnv must be used within EnvProvider");
  return ctx;
};
