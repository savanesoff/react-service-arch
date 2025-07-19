import { useContext } from "react";
import { AppConfigContext } from "./AppConfigContext";

export const useAppConfig = () => {
  const ctx = useContext(AppConfigContext);
  if (!ctx)
    throw new Error("useAppConfig must be used within AppConfigProvider");
  return ctx;
};
