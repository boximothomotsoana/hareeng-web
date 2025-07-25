import { createBrowserRouter, type RouteObject } from "react-router";

import ErrorBoundary from "@/components/common/ErrorBoundary";
import Spinner from "@/components/common/Spinner";
import { type AppRouteObject } from "@/router/interface";
import routes from "@/router/routes";

const wrappedRouter = (routes: AppRouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    const { children, ...otherRouteProps } = route;

    const newRoute: RouteObject = { ...otherRouteProps };
    newRoute.errorElement = <ErrorBoundary />;
    newRoute.hydrateFallbackElement = <Spinner />;

    if (Array.isArray(children) && children.length) {
      newRoute.children = wrappedRouter(children);
    }

    return newRoute;
  });
};

export default createBrowserRouter(wrappedRouter(routes));
