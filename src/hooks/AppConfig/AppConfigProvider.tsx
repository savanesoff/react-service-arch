import { useCallback, useState } from "react";
import { AppConfigContext } from "./AppConfigContext";

export const AppConfigProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fetchTimeout, setFetchTimeout] = useState(1000);
  const [shouldError, setShouldError] = useState(false);
  const network = useCallback(async () => {
    await new Promise((r) => setTimeout(r, fetchTimeout));
    if (shouldError) {
      throw new Error("Failed to fetch environment data");
    }
  }, [fetchTimeout, shouldError]);
  return (
    <AppConfigContext.Provider
      value={{
        fetchTimeout,
        setFetchTimeout,
        shouldError,
        setShouldError,
        network,
      }}
    >
      {children}
    </AppConfigContext.Provider>
  );
};
