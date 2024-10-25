import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <div className="main-default-layout">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
