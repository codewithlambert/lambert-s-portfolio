import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { SpiderLoader } from "./components/SpiderLoader";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPendingComponent: SpiderLoader,
    defaultPendingMs: 300, // Show loader after 300ms
    defaultPendingMinMs: 500, // Keep loader visible for at least 500ms
  });

  return router;
};
