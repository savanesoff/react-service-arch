import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./hooks/auth/AuthProvider";
import { ServiceDemo } from "./components/ServiceDemo";
import { AppConfigProvider } from "./hooks/AppConfig";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppConfigProvider>
        <AuthProvider>
          <ServiceDemo />
        </AuthProvider>
      </AppConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
