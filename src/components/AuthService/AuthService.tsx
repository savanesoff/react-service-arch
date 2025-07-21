import React, { useCallback } from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";
import { useStandby } from "../../hooks/standby/useStandby";
import { useEnv } from "../../hooks/env/useEnv";

export const AuthService: React.FC = () => {
  const { data, login, logout } = useAuth();
  const { isStandby } = useStandby();
  const { data: env } = useEnv();

  const onClick = useCallback(() => {
    if (data) {
      logout.mutateAsync();
    } else {
      login.mutateAsync({
        username: Math.random().toString(36).substring(2, 10),
        password: "password",
      });
    }
  }, [data, login, logout]);
  return (
    <ServiceCard
      title={`Auth Service (${
        data?.user ? `logged in as: ${data.user.name}` : "logged out"
      })`}
      status={!login.data ? login : logout}
    >
      <Button variant="danger" onClick={onClick} disabled={isStandby || !env}>
        {data ? "Logout" : "Login"}
      </Button>
    </ServiceCard>
  );
};
