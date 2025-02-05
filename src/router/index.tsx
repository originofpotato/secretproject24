import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Memories from "../pages/Memories.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/memories",
        element: <Memories />
    }
]);

export default router;