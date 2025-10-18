import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../../AppLayout/AppLayout";
import { routeConfig } from "../config/routeConfig";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}
