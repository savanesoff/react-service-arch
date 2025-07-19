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
        <StandbyProvider>
          <EnvProvider env="staging">
            <AuthProvider>
              <AccountProvider>
                <ServiceDemo />
              </AccountProvider>
            </AuthProvider>
          </EnvProvider>
        </StandbyProvider>
      </AppConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
