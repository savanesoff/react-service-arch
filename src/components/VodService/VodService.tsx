import React from "react";
import { ServiceCard } from "../ServiceCard";
import { useVod } from "../../hooks/vod/useVod";
import { VodAssetView } from "./VodAsset";

export const VodService: React.FC = () => {
  const { data, ...query } = useVod();
  return (
    <ServiceCard
      title="VOD Service"
      status={query}
      className="flex flex-col gap-4 w-full"
    >
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
