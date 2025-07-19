import React from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";

export const AuthService: React.FC = () => {
  const { data, login, logout } = useAuth();

  return (
    <ServiceCard
      title={`Auth Service ${
        data?.user ? `logged in as: ${data.user.name}` : "logged out"
      }`}
      status={!data ? login : logout}
    >
      <Button
        variant="danger"
        onClick={() => {
          if (data) {
            logout.mutateAsync();
          }
          login.mutateAsync({ username: "testuser", password: "password" });
        }}
      >
        {data ? "Logout" : "Login"}
      </Button>
    </ServiceCard>
  );
};
