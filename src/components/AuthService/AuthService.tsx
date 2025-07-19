import React from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";
import { useStandby } from "../../hooks/standby/useStandby";

export const AuthService: React.FC = () => {
  const { data, login, logout } = useAuth();
  const { isStandby } = useStandby();

  return (
    <ServiceCard
      title={`Auth Service (${
        data?.user ? `logged in as: ${data.user.name}` : "logged out"
      })`}
      status={!login.data ? login : logout}
    >
      <Button
        variant="danger"
        onClick={() => {
          if (data) {
            logout.mutateAsync();
          } else {
            login.mutateAsync({
              username: Math.random().toString(36).substring(2, 10),
              password: "password",
            });
          }
        }}
        disabled={isStandby}
      >
        {data ? "Logout" : "Login"}
      </Button>
    </ServiceCard>
  );
};
