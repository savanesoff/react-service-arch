import React from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useStandby } from "../../hooks/standby/useStandby";

export const StandbyService: React.FC = () => {
  const standby = useStandby();
  const setStandby = (standbyValue: boolean) => {
    window.fakeStandby = standbyValue;
    standby.refetch();
  };
  return (
    <ServiceCard
      title="Standby Service"
      status={
        standby.isLoading
          ? "loading"
          : standby.data?.standby
          ? "standby"
          : "good"
      }
      statusText={
        standby.isLoading ? "Loading" : standby.data?.standby ? "ON" : "OFF"
      }
    >
      <Button
        onClick={() => setStandby(!standby.data?.standby)}
        loading={standby.isLoading}
      >
        Toggle Standby
      </Button>
    </ServiceCard>
  );
};
