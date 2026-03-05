import { Outlet, ScrollRestoration } from "react-router";
import Header from "../../components/Header";

export default function Default() {
  return (
    <>
      <ScrollRestoration />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="mx-4 sm:mx-5 lg:mx-6 grid grid-rows-[min-content] grid-cols-4 gap-x-4 sm:grid-cols-8 sm:gap-x-5 lg:grid-cols-12 lg:gap-x-6 relative pb-5 flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
}
