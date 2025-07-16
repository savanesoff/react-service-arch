import { useContext } from "react";
import { EasContext } from "./EasContext";

export const useEas = () => {
  const ctx = useContext(EasContext);
  if (!ctx) throw new Error("useEas must be used within EasProvider");
  return ctx;
};
