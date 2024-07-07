import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ShinyPokemonPage from "./pages/ShinyPokemonPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/:nome",
        element: <DetailPage />,
    },
    {
        path: "/shiny/:nome",
        element: <ShinyPokemonPage />,
    },
]);
export default router;