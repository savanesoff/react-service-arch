import React from "react";
import { ServiceCard } from "../ServiceCard";
import { useEas } from "../../hooks/eas/useEas";

export const EasService: React.FC = () => {
  const eas = useEas();
  return (
    <ServiceCard
      title="EAS Service"
      status={
        eas.isLoading
          ? "loading"
          : eas.data?.alerts?.length
          ? "good"
          : "inactive"
      }
      statusText={
        eas.isLoading
          ? "Loading"
          : eas.data?.alerts?.length
          ? "Active"
          : "Inactive"
      }
    >
      <div>Alerts: {eas.data?.alerts?.join(", ") || "-"}</div>
    </ServiceCard>
  );
};
