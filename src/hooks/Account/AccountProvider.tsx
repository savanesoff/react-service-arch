import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppConfig } from "../AppConfig";
import { useAuth } from "../auth/useAuth";
import {
  AccountContext,
  type AccountData,
  type ProfileData,
  type SubscriptionStatus,
} from "./AccountContext";
import { useEffect, useState } from "react";
import { generateProfile } from "./profileMocks";
import type { AuthData } from "../auth";

const fetchAccount = async ({
  authData,
}: {
  authData: AuthData;
}): Promise<AccountData> => {
  // Simulate fetching user data from an API
  // Generate random user data for demonstration
  const randomId = `user${Math.floor(Math.random() * 10000)}`;
  const usernames = ["alice", "bob", "charlie", "diana", "eve"];
  const emails = [
    "alice@email.com",
    "bob@email.com",
    "charlie@email.com",
    "diana@email.com",
    "eve@email.com",
  ];

  const statuses: SubscriptionStatus[] = ["active", "inactive", "expired"];
  const idx = Math.floor(Math.random() * usernames.length);
  const profiles: ProfileData[] = Array.from(
    { length: 2 + Math.floor(Math.random() * 4) },
    () => generateProfile({ id: Math.random().toString(36).substring(2, 15) })
  );

  profiles[0].primary = true; // Mark the first profile as primary
  profiles[0].name = authData.user.name;
  return {
    id: randomId,
    username: usernames[idx],
    email: emails[idx],
    subscriptionStatus: statuses[Math.floor(Math.random() * statuses.length)],
    profiles,
  };
};

export const AccountProvider = ({
  children,
  invalidateQueries,
}: {
  children: React.ReactNode;
  invalidateQueries?: string[];
}) => {
  const { network } = useAppConfig();
  const { login } = useAuth();
  const clientQuery = useQueryClient();
  const [activeProfile, setActiveProfile] = useState<ProfileData | null>(null);

  const query = useQuery<AccountData>({
    queryKey: ["account", login.data],
    enabled: !!login.data, // Only fetch account if user is logged in
    queryFn: async () => {
      if (!login.data) {
        throw new Error("User not logged in");
      }
      clientQuery.invalidateQueries({ queryKey: invalidateQueries });
      return network().then(() => fetchAccount({ authData: login.data }));
    },
  });

  useEffect(() => {
    if (query.data && query.data.profiles && query.data.profiles.length > 0) {
      const primaryProfile = query.data.profiles.find(
        (profile) => profile.primary
      );
      if (primaryProfile) {
        setActiveProfile(primaryProfile);
      }
    } else {
      setActiveProfile(null);
    }
  }, [query.data]);

  useEffect(() => {
    if (!login.data) {
      setActiveProfile(null);
    }
  }, [login.data]);
  return (
    <AccountContext.Provider
      value={{
        activeProfile,
        setActiveProfile,
        ...query,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
