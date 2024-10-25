import { Outlet } from "react-router-dom";
import Header from "../../Header";
import ShoppingCard from "../../ShoppingCard";
import SideBar from "../../SideBar";

function Layout4() {
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
          <div className="content-double">
            <div className="component-change">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Layout4;
