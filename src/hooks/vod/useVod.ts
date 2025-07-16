import { useContext } from "react";
import { VodContext } from "./VodContext";

export const useVod = () => {
  const ctx = useContext(VodContext);
  if (!ctx) throw new Error("useVod must be used within VodProvider");
  return ctx;
};
