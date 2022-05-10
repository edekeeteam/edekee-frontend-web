import { Outlet } from "react-router-dom";

function FullPageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default FullPageLayout;
