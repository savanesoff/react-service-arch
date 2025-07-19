import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { VodData } from "./VodData";
import { useAppConfig } from "../AppConfig";
import { VodMockData } from "./VodData";

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
  return useQuery({
    queryKey: ["vod", filters],
    queryFn: () => network().then(() => fetchVod(filters)),
  });
}
