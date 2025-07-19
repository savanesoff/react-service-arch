import React from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useAccount } from "../../hooks/Account";
import { cn } from "../../utils/cn";

export const AccountService: React.FC = () => {
  const { data, setActiveProfile, activeProfile, ...query } = useAccount();

  return (
    <ServiceCard
      title={`Account Service ${
        data?.username ? `logged in as: ${data.username}` : "logged out"
      }`}
      status={query}
    >
      {data?.profiles.map((profile) => (
        <Button
          key={profile.id}
          variant="secondary"
          onClick={() => {
            setActiveProfile(profile);
          }}
        >
          <div className="flex flex-col items-center">
            <img
              src={profile.avatarUrl}
              alt={`${profile.name}'s avatar`}
              className={cn(
                "rounded-full size-32",
                profile.primary && "border-2 border-blue-400",
                activeProfile?.id === profile.id &&
                  "shadow-[0_0_16px_4px_rgba(34,197,94,0.7)]"
              )}
            />
            <div>{profile.name}</div>
          </div>
        </Button>
      ))}
    </ServiceCard>
  );
};
