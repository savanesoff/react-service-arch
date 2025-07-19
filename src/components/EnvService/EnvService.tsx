import { ServiceCard } from "../ServiceCard";
import { useEnv } from "../../hooks/env/useEnv";
import React from "react";
import { Select } from "../Select";

export const EnvService: React.FC = () => {
  const { data, setEnv, ...queryStatus } = useEnv();

  return (
    <ServiceCard
      title={`Env Service: (${data?.env || "initializing"})`}
      status={queryStatus}
    >
      <Select
        title={`Select Environment`}
        onChange={setEnv}
        options={["production", "development", "staging"]}
        disabled={queryStatus.isLoading}
        selected={data?.env}
      />
    </ServiceCard>
  );
};
