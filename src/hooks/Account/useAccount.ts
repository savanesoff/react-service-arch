import { useContext } from "react";
import { AccountContext } from "./AccountContext";

export const useAccount = () => {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within AccountProvider");
  return ctx;
};
