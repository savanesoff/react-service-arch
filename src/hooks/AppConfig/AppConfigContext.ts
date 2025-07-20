import { createContext } from "react";

export type AppConfigContextValue = {
  /** delay of the fetch request in milliseconds */
  fetchTimeout: number;
  /** function to set the fetch timeout */
  setFetchTimeout: (timeout: number) => void;
  /** whether the fetch should error */
  shouldError: boolean;
  /** function to set whether the fetch should error */
  setShouldError: (value: boolean | ((prev: boolean) => boolean)) => void;
  /** function to simulate a network request */
  network: () => Promise<void>;
};

export const AppConfigContext = createContext<
  AppConfigContextValue | undefined
>(undefined);
