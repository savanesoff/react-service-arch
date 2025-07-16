import { createContext } from "react";
import type { UseQueryResult } from "@tanstack/react-query";

export type EnvData = { env: string };
export const EnvContext = createContext<UseQueryResult<EnvData> | undefined>(
  undefined
);
