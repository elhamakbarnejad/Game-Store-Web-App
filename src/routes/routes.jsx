import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import GameDetails from "../pages/Game/GameDetails";
import MainLayout from "../components/Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/:gameID", element: <GameDetails /> },
    ],
  },
]);
export default router;
