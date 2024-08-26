import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootScreen from "./screens/RootScreen";

const App: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router} /> */}
      {/* <BrowserRouter basename="https://git-in-official.github.io/admin-web">
        <Routes>
          <Route path="/" element={<RootScreen />} />
        </Routes>
      </BrowserRouter> */}
      <RootScreen />
    </QueryClientProvider>
  );
};

export default App;
