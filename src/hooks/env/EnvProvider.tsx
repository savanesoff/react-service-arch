// ...existing code...
import { useQuery } from "@tanstack/react-query";
import { EnvContext } from "./EnvContext";
import type { EnvData } from "./EnvContext";

const fetchEnv = async (): Promise<EnvData> => {
  await new Promise((r) => setTimeout(r, 300));
  return { env: "production" };
};

export const EnvProvider = ({ children }: { children: React.ReactNode }) => {
  const query = useQuery({ queryKey: ["env"], queryFn: fetchEnv });
  return <EnvContext.Provider value={query}>{children}</EnvContext.Provider>;
};
