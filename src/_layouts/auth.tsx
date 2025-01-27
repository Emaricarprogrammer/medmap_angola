import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col text-center items-center py-20"
      style={{ backgroundImage: "url('/main-bg.png')" }}
    >
      <Outlet />
    </div>
  );
}
