import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./hooks/auth/AuthProvider";
import { ServiceDemo } from "./components/ServiceDemo";
import { AppConfigProvider } from "./hooks/AppConfig";
import { AccountProvider } from "./hooks/Account/AccountProvider";
import { StandbyProvider } from "./hooks/standby/StandbyProvider";
import { EnvProvider } from "./hooks/env/EnvProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppConfigProvider>
        <EnvProvider invalidateQueries={["auth"]} env="staging">
          <AuthProvider invalidateQueries={["account"]}>
            <AccountProvider invalidateQueries={["vod"]}>
              <StandbyProvider invalidateQueries={["auth"]}>
                <ServiceDemo />
              </StandbyProvider>
            </AccountProvider>
          </AuthProvider>
        </EnvProvider>
      </AppConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
