import { useRoutes, type RouteObject } from "react-router-dom";
import { AppLayout } from "../../AppLayout/AppLayout";
import { routerConfig } from "../config/routeConfig";

export function AppRouter() {
  const routes: RouteObject[] = [
    {
      element: <AppLayout />,
      children: routerConfig,
    },
  ];

  const element = useRoutes(routes);

  return element;
  // return (
  //   <Routes>
  //     <Route element={<AppLayout />}>
  //       {routeConfig.map(({ path, element }) => (
  //         <Route key={path} path={path} element={element} />
  //       ))}
  //     </Route>
  //   </Routes>
  // );
}
