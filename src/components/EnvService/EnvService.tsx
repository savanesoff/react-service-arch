import { ServiceCard } from "../ServiceCard";
import { useEnv } from "../../hooks/env/useEnv";
import React, { useCallback, useMemo } from "react";
import { Select, type SelectOption } from "../Select";
import type { EnvType } from "../../hooks/env/EnvContext";

export const EnvService: React.FC = () => {
  const { data, setEnv, ...queryStatus } = useEnv();
  const options: SelectOption<EnvType>[] = useMemo(
    () => [
      {
        value: "production",
        label: "prod",
        selected: data?.env === "production",
      },
      {
        value: "development",
        label: "dev",
        selected: data?.env === "development",
      },
      { value: "staging", label: "staging", selected: data?.env === "staging" },
    ],
    [data?.env]
  );

  const onChange = useCallback(
    (option: SelectOption<EnvType>) => {
      setEnv(option.value);
    },
    [setEnv]
  );

  return (
    <ServiceCard
      title={`Env Service: (${data?.env || "initializing"})`}
      status={queryStatus}
    >
      <Select
        title={`Select Environment`}
        onChange={onChange}
        options={options}
        disabled={queryStatus.isLoading}
      />
    </ServiceCard>
  );
};
