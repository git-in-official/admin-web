import { createBrowserRouter } from "react-router-dom";
import RootScreen from "../screens/RootScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootScreen />,
  },
]);

export default router;
