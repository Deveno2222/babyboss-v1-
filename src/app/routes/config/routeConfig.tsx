import { Navigate } from "react-router-dom";
import { ClientsLayout } from "../../../pages/ClientDetailsPage/layouts/ClientsLayout";
import { ClientsDetailsPage } from "../../../pages/ClientDetailsPage/ui/ClientDetailsPage";
import { ClientsPage } from "../../../pages/ClientsPage/ui/ClientsPage";
import { NotFoundPage } from "../../../pages/NotFound";

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
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
