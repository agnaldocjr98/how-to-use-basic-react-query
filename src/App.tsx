import { MyRoutes } from "./routes";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <MyRoutes />
    </QueryClientProvider>
  );
}

export default App;
