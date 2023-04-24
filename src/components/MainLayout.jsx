import { Outlet } from "react-router-dom";

import LoginRequired from "@src/components/LoginRequired.jsx";

export default function MainLayout() {
  return (
    <LoginRequired>
      <Outlet />
    </LoginRequired>
  );
}
