import React from "react";
import { ServiceCard } from "../ServiceCard";
import { useVod } from "../../hooks/vod/useVod";

export const VodService: React.FC = () => {
  const vod = useVod();
  return (
    <ServiceCard
      title="VOD Service"
      status={
        vod.isLoading ? "loading" : vod.data?.vod?.length ? "good" : "inactive"
      }
      statusText={
        vod.isLoading
          ? "Loading"
          : vod.data?.vod?.length
          ? "Available"
          : "Unavailable"
      }
    >
      <div>VOD List: {vod.data?.vod?.join(", ") || "-"}</div>
    </ServiceCard>
  );
};
