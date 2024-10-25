import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Header";
import SideBar from "../../SideBar";
import "./LayoutApp.css";

function LayoutApp() {
  const location = useLocation();
  return (
    <>
      <div className="layout-app-container">
        <div className="sidebar-component">
          <SideBar />
        </div>
        <main className="content-container">
          <div className={"header-container"}>
            <Header />
          </div>
          <div className="component-change">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default LayoutApp;
