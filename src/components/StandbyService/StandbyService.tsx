import React, { useCallback } from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useStandby } from "../../hooks/standby/useStandby";
import type { StatusBadgeProps } from "../StatusBadge";

export const StandbyService: React.FC = () => {
  const { isStandby, set } = useStandby();
  const onClick = useCallback(() => set(!isStandby), [isStandby, set]);
  return (
    <ServiceCard
      title={`Standby Service${isStandby ? " (ON)" : " (OFF)"}`}
      status={
        {
          isEnabled: isStandby,
        } as StatusBadgeProps["status"]
      }
    >
      <Button onClick={onClick}>{isStandby ? "Disable" : "Enable"}</Button>
    </ServiceCard>
  );
};
