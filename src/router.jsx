import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ItensList from "./pages/ItensList";
import NewItemPage from "./pages/NewItemPage";
import ItemPage from "./pages/ItemPage";
import loadItem from "./loaders/items";
import UpdateItemPage from "./pages/UpdateItemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/itens",
        element: <ItensList />,
      },
      {
        path: "/novo-item",
        element: <NewItemPage />,
      },
      {
        path: "/:itemId",
        element: <ItemPage />,
        loader: loadItem,
      },
      {
        path: "/atualizar/:itemId",
        element: <UpdateItemPage />,
        loader: loadItem,
      },
    ],
  },
]);

export default router;
