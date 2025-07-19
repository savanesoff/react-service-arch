import { createContext } from "react";

import type { UseQueryResult } from "@tanstack/react-query";

export type EnvType = "production" | "development" | "staging";
export type EnvData = {
  env: EnvType;
  endpoints: {
    vod: string;
    eas: string;
    auth: string;
  };
};
export type EnvContextValue = UseQueryResult<EnvData> & {
  setEnv: (env: EnvType) => void;
};

export const EnvContext = createContext<EnvContextValue | undefined>(undefined);
