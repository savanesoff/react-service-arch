import React from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth/useAuth";

export const AuthService: React.FC = () => {
  const auth = useAuth();
  const logout = () => {
    window.fakeAuthStatus = "logged-out";
    window.fakeAuthUser = null;
    auth.refetch();
  };
  let status: "loading" | "good" | "standby" | "invalid" | "unknown" =
    "unknown";
  if (auth.isLoading) status = "loading";
  else if (auth.data?.status === "logged-in") status = "good";
  else if (auth.data?.status === "standby") status = "standby";
  else if (auth.data?.status === "logged-out") status = "invalid";
  return (
    <ServiceCard
      title="Auth Service"
      status={status}
      statusText={auth.isLoading ? "Loading" : auth.data?.status}
    >
      <div>User: {auth.data?.user?.name || "None"}</div>
      <Button variant="danger" onClick={logout}>
        Logout
      </Button>
    </ServiceCard>
  );
};
