import React from "react";
import { ServiceCard } from "../ServiceCard";
import { useVod } from "../../hooks/vod/useVod";
import { VodAssetView } from "./VodAsset";

export const VodService: React.FC = () => {
  const { data, ...query } = useVod();
  return (
    <ServiceCard title="VOD Service" status={query}>
      <div>
        <h2>VOD List:</h2>
        {data?.vod.map((asset) => (
          <VodAssetView key={asset.id} {...asset} />
        ))}
      </div>
    </ServiceCard>
  );
};
