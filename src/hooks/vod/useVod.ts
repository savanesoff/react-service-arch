import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { VodData } from "./VodData";
import { useAppConfig } from "../AppConfig";
import { VodMockData } from "./VodData";
import { useAccount } from "../Account";

export type VodFilters = {
  orderBy?: "date" | "popularity";
  genre?: string;
  search?: string;
  count?: number;
  offset?: number;
};

const fetchVod = async (filters: VodFilters | null): Promise<VodData> => {
  // Simulate fetching VOD data based on filters
  const data = [...VodMockData]
    .sort(() => Math.random() - 0.5) // Randomize order for demo purposes
    .filter((vod) => {
      if (filters?.genre && !vod.genre?.includes(filters.genre)) return false;
      if (
        filters?.search &&
        !vod.title.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;
      return true;
    })
    .slice(
      filters?.offset || 0,
      (filters?.offset || 0) + (filters?.count || 15)
    );

  return {
    vod: data,
  };
};

export function useVod(filters: VodFilters | null): UseQueryResult<VodData> {
  const { network } = useAppConfig();
  const { activeProfile } = useAccount();
  return useQuery({
    queryKey: ["vod", filters, activeProfile?.id],
    queryFn: () => network().then(() => fetchVod(filters)),

    enabled: !!activeProfile, // Ensure the user is logged in
    refetchOnWindowFocus: false, // Disable refetching on window focus
    staleTime: Infinity, // Prevents refetching unless filters change
    // staleTime: 2000, // refreshes data once after query is run
    // refetchInterval: 5000, // Automatically refetch every 5 seconds
  });
}
