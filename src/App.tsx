import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout/RootLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeFeed from "./pages/HomeFeed";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomeFeed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
