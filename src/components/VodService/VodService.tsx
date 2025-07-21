import React, { useCallback, useMemo, useState } from "react";
import { ServiceCard } from "../ServiceCard";
import { useVod, type VodFilters } from "../../hooks/vod/useVod";
import { VodAssetView } from "./VodAsset";
import { Select, type SelectOption } from "../Select";

export const VodService: React.FC = () => {
  const orderFilter = useMemo<SelectOption<VodFilters>[]>(
    () => [
      { value: { orderBy: "date" }, label: "order by date", selected: true },
      { value: { orderBy: "popularity" }, label: "order by popularity" },
    ],
    []
  );

  const [filters, setFilters] = useState<VodFilters | null>(
    orderFilter.find((f) => f.selected)?.value || null
  );
  const { data, ...query } = useVod(filters);

  const onFilterChange = useCallback((option: SelectOption<VodFilters>) => {
    setFilters(option.value);
  }, []);
  return (
    <ServiceCard
      title="VOD Service"
      status={query}
      className="flex flex-col gap-4 w-full"
    >
      <Select
        title={"Apply data filter"}
        options={orderFilter}
        onChange={onFilterChange}
      />
      {data?.vod.length && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.vod.map((asset) => (
            <VodAssetView key={asset.id} {...asset} />
          ))}
        </div>
      )}
    </ServiceCard>
  );
};
