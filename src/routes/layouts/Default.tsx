import { Outlet, ScrollRestoration } from "react-router";
import Header from "../../components/Header";

export default function Default() {
  return (
    <>
      <ScrollRestoration />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
