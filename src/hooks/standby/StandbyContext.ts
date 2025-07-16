import { createContext } from "react";
import type { UseQueryResult } from "@tanstack/react-query";

export type StandbyData = { standby: boolean };
export const StandbyContext = createContext<
  UseQueryResult<StandbyData> | undefined
>(undefined);
