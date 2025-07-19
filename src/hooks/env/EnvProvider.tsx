// ...existing code...

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { EnvContext, type EnvType, type EnvData } from "./EnvContext";
import { useCallback, useState, type ReactNode } from "react";
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
  invalidateQueries = ["login"],
  env: envProp = "staging",
}: {
  children: ReactNode;
  invalidateQueries?: string[];
  env?: EnvType;
}) => {
  const { network } = useAppConfig();
  const [env, setEnvState] = useState<EnvType>(envProp);
  const queryClient = useQueryClient();
  const props = useQuery<EnvData>({
    queryKey: ["env", env],
    queryFn: () => network().then(() => fetchEnv(env)),
  });

  const setEnv = useCallback(
    (newEnv: EnvType) => {
      setEnvState(newEnv);
      // Invalidate the 'profile' query when env changes
      queryClient.invalidateQueries({ queryKey: invalidateQueries });
      queryClient.removeQueries({ queryKey: invalidateQueries });
    },
    [invalidateQueries, queryClient]
  );
  return (
    <EnvContext.Provider value={{ ...props, setEnv }}>
      {children}
    </EnvContext.Provider>
  );
};
