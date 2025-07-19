import type { UseQueryResult } from "@tanstack/react-query";
import type { Genre } from "../../types/Genres";
import { createContext } from "react";

export type SubscriptionStatus = "active" | "inactive" | "expired";

export type AccountData = {
  id: string;
  username: string;
  email: string;
  subscriptionStatus: SubscriptionStatus; // optional subscription status
  profiles: ProfileData[]; // optional profiles under the account
};

export type ProfileData = {
  id: string;
  name: string;
  age?: number; // optional age field
  gender?: string; // optional gender field
  preferences: Genre[]; // optional preferences field
  avatarUrl: string; // optional profile picture URL
  primary: boolean; // optional primary profile flag
};

export type AccountContextValue = UseQueryResult<AccountData> & {
  setActiveProfile: (profile: ProfileData) => void;
  activeProfile: ProfileData | null;
};

export const AccountContext = createContext<AccountContextValue | undefined>(
  undefined
);
