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

const fetchVod = async (filters: VodFilters): Promise<VodData> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Simulate fetching VOD data based on filters
  const data = [...VodMockData]
    .sort(() => Math.random() - 0.5) // Randomize order for demo purposes
    .filter((vod) => {
      if (filters.genre && !vod.genre?.includes(filters.genre)) return false;
      if (
        filters.search &&
        !vod.title.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;
      return true;
    })
    .slice(filters.offset || 0, (filters.offset || 0) + (filters.count || 10));

  return {
    vod: data,
  };
};

export function useVod(filters: VodFilters = {}): UseQueryResult<VodData> {
  const { network } = useAppConfig();
  const { activeProfile } = useAccount();
  return useQuery({
    queryKey: ["vod", filters, activeProfile?.id],
    queryFn: () => network().then(() => fetchVod(filters)),
    enabled: !!activeProfile, // Ensure the user is logged in
    staleTime: Infinity,
  });
}
