import { ClientsPage } from "../../../pages/ClientsPage/ui/ClientsPage";
import { NotFoundPage } from "../../../pages/NotFound";

export const routeConfig = [
  {
    path: "/",
    element: <ClientsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
