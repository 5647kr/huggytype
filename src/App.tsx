import { createBrowserRouter, RouterProvider } from "react-router";
import Default from "./routes/layouts/Default";
import Home from "./routes/pages/Home";
import Adopt from "./routes/pages/Adopt";
import Recommend from "./routes/pages/Recommend";

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      { path: "", Component: Home },
      { path: "/adopt", Component: Adopt },
      { path: "/recommend", Component: Recommend },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
