import React, { useState } from "react";
import { StandbyContext } from "./StandbyContext";

export const StandbyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isStandby, setIsStandby] = useState(false);

  return (
    <StandbyContext.Provider
      value={{
        set: setIsStandby,
        isStandby,
      }}
    >
      {children}
    </StandbyContext.Provider>
  );
};
