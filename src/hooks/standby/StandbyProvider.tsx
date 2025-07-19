import React, { useCallback, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { StandbyContext } from "./StandbyContext";

export const StandbyProvider = ({
  children,
  invalidateQueries = ["auth"],
}: {
  children: React.ReactNode;
  invalidateQueries?: string[];
}) => {
  const queryClient = useQueryClient();
  const [isStandby, setIsStandby] = useState(false);
  const set = useCallback(
    (newStandby: boolean) => {
      setIsStandby(newStandby);
      // Invalidate the 'auth' query when standby changes
      queryClient.invalidateQueries({ queryKey: invalidateQueries });
    },
    [invalidateQueries, queryClient]
  );
  return (
    <StandbyContext.Provider
      value={{
        set,
        isStandby,
      }}
    >
      {children}
    </StandbyContext.Provider>
  );
};
