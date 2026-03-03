import { createBrowserRouter, RouterProvider } from "react-router";
import Default from "./routes/layouts/Default";
import Home from "./routes/pages/Home";
import Detail from "./routes/pages/Detail";
import Recommend from "./routes/pages/Recommend";
import WishList from "./routes/pages/WishList";

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      { path: "", Component: Home },
      { path: "/detail/:id", Component: Detail },
      { path: "/recommend", Component: Recommend },
      { path: "/wishList", Component: WishList },
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
