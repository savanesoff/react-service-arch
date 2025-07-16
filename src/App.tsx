import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EnvProvider } from "./hooks/env/EnvProvider";
import { StandbyProvider } from "./hooks/standby/StandbyProvider";
import { AuthProvider } from "./hooks/auth/AuthProvider";
import { VodProvider } from "./hooks/vod/VodProvider";
import { EasProvider } from "./hooks/eas/EasProvider";
import { ServiceDemo } from "./components/ServiceDemo";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EnvProvider>
        <StandbyProvider>
          <AuthProvider>
            <VodProvider>
              <EasProvider>
                <ServiceDemo />
              </EasProvider>
            </VodProvider>
          </AuthProvider>
        </StandbyProvider>
      </EnvProvider>
    </QueryClientProvider>
  );
}

export default App;
