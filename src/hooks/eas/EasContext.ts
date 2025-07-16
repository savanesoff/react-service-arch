import { createContext } from "react";
import type { UseQueryResult } from "@tanstack/react-query";

export type EasData = { alerts: string[] };
export const EasContext = createContext<UseQueryResult<EasData> | undefined>(
  undefined
);
