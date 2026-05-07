import { Outlet } from "react-router";
import Navigation from "../components/Navigation";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
