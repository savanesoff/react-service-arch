import React from "react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { useAccount } from "../../hooks/Account";
import { cn } from "../../utils/cn";

export const AccountService: React.FC = () => {
  const { data, setActiveProfile, activeProfile, ...query } = useAccount();

  return (
    <ServiceCard title={`Profile Service`} status={query}>
      <div className="flex flex-row items-center gap-2">
        {data?.profiles.map((profile) => (
          <Button
            key={profile.id}
            variant={profile.primary ? "primary" : "secondary"}
            onClick={() => {
              setActiveProfile(profile);
            }}
          >
            <div className="flex flex-col items-center size-20 ">
              <img
                src={profile.avatarUrl}
                alt={`${profile.name}'s avatar`}
                className={cn(
                  "rounded-full size-16",
                  profile.primary && "border-2 border-blue-400",
                  activeProfile?.id === profile.id &&
                    "shadow-[0_0_16px_4px_rgba(34,197,94,0.7)]"
                )}
              />
              <div>{profile.name}</div>
            </div>
          </Button>
        ))}
      </div>
    </ServiceCard>
  );
};
