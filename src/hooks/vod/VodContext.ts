import { createContext } from "react";
import type { UseQueryResult } from "@tanstack/react-query";

export type VodData = { vod: string[] };
export const VodContext = createContext<UseQueryResult<VodData> | undefined>(
  undefined
);
