import React from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useEnv } from "../../hooks/env/useEnv";

export const EnvService: React.FC = () => {
  const env = useEnv();
  const setEnv = (envValue: string) => {
    window.fakeEnv = envValue;
    env.refetch();
  };
  return (
    <ServiceCard
      title="Env Service"
      status={env.isLoading ? "loading" : "good"}
      statusText={env.isLoading ? "Loading" : env.data?.env || "-"}
    >
      <Button
        onClick={() =>
          setEnv(env.data?.env === "production" ? "dev" : "production")
        }
        loading={env.isLoading}
      >
        Set Env ({env.data?.env === "production" ? "dev" : "production"})
      </Button>
    </ServiceCard>
  );
};
