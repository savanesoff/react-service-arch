// ...existing code...

import { useQuery } from "@tanstack/react-query";
import { EnvContext, type EnvType, type EnvData } from "./EnvContext";
import { useState, type ReactNode } from "react";
import { useAppConfig } from "../AppConfig/";

const fetchEnv = async (env: EnvType): Promise<EnvData> => {
  return {
    env,
    endpoints: {
      vod: `https://vod.${env}.example.com`,
      auth: `https://auth.${env}.example.com`,
      eas: `https://eas.${env}.example.com`,
    },
  };
};

export const EnvProvider = ({
  children,
  env: envProp = "staging",
}: {
  children: ReactNode;
  env?: EnvType;
}) => {
  const { network } = useAppConfig();
  const [env, setEnvState] = useState<EnvType>(envProp);
  const props = useQuery<EnvData>({
    queryKey: ["env", env],
    queryFn: () => network().then(() => fetchEnv(env)),
    refetchOnWindowFocus: false, // Disable refetching on window focus
    staleTime: Infinity, // Prevents refetching unless filters change
  });

  return (
    <EnvContext.Provider value={{ ...props, setEnv: setEnvState }}>
      {children}
    </EnvContext.Provider>
  );
};
