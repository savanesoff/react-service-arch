import { createContext } from "react";

export type StandByValue = {
  set: (standby: boolean) => void;
  isStandby: boolean;
};
export const StandbyContext = createContext<StandByValue | undefined>(
  undefined
);
