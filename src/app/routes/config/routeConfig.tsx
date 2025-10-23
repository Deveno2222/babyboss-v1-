import { Navigate } from "react-router-dom";
import { ClientsLayout } from "../../../pages/ClientDetailsPage/layouts/ClientsLayout";
import { ClientsDetailsPage } from "../../../pages/ClientDetailsPage/ui/ClientDetailsPage";
import { ClientsPage } from "../../../pages/ClientsPage/ui/ClientsPage";
import { NotFoundPage } from "../../../pages/NotFound";
import { ClientEditPage } from "../../../pages/ClientEditPage/ui/CliendEditPage";

export const routerConfig = [
  {
    index: true,
    element: <ClientsPage />,
  },
  {
    path: "clients",
    element: <ClientsLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/"} replace />,
      },
      {
        path: ":id",
        element: <ClientsDetailsPage />,
      },
      {
        path: ":id/edit",
        element: <ClientEditPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
