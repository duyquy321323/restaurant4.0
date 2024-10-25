import { NavLink, useLocation } from "react-router-dom";
import Pattern from "../../assets/icon/Active-Pattern.svg";
import GraphOrangeIcon from "../../assets/icon/Graph-Orange.svg";
import GraphWhiteIcon from "../../assets/icon/Graph-White.svg";
import HistoryOrangeIcon from "../../assets/icon/History-Orange.svg";
import HistoryWhiteIcon from "../../assets/icon/History-White.svg";
import HomeOrangeIcon from "../../assets/icon/Home-Orange.png";
import HomeWhiteIcon from "../../assets/icon/Home-White.png";
import LogoutOrangeIcon from "../../assets/icon/Logout-Orange.svg";
import LogoutWhiteIcon from "../../assets/icon/Logout-White.svg";
import NotificationOrangeIcon from "../../assets/icon/Notification-Orange.svg";
import NotificationWhiteIcon from "../../assets/icon/Notification-White.svg";
import Logo from "../../assets/icon/Restaurant.svg";
import SettingOrangeIcon from "../../assets/icon/Setting-Orange.svg";
import SettingWhiteIcon from "../../assets/icon/Setting-White.svg";
import "./SideBar.css";

function SideBar() {
  const location = useLocation();
  const listTab = [
    {
      iconWhite: HomeWhiteIcon,
      iconOrange: HomeOrangeIcon,
      navigate: "/menu",
    },
    {
      iconWhite: GraphWhiteIcon,
      iconOrange: GraphOrangeIcon,
      navigate: "/dashboard",
    },
    {
      iconWhite: NotificationWhiteIcon,
      iconOrange: NotificationOrangeIcon,
      navigate: "/notification",
    },
    {
      iconWhite: SettingWhiteIcon,
      iconOrange: SettingOrangeIcon,
      navigate: "/setting/update-information",
    },
    {
      iconWhite: HistoryWhiteIcon,
      iconOrange: HistoryOrangeIcon,
      navigate: "/history",
    },
    {
      iconWhite: LogoutWhiteIcon,
      iconOrange: LogoutOrangeIcon,
      navigate: "/login",
    },
  ];
  return (
    <>
      <div className="container-sidebar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        {listTab.map((item) => (
          <NavLink to={item.navigate}>
            <div
              className={
                "item-sidebar" +
                (location.pathname.includes(item.navigate.split("/").at(1)) &&
                item.navigate.length > 1
                  ? " item-active"
                  : "")
              }
            >
              <div className={"border-icon"}>
                {location.pathname.includes(item.navigate.split("/").at(1)) &&
                item.navigate.length > 1 ? (
                  <>
                    <img className="pattern" src={Pattern} alt="icon-tab" />
                    <img className="tab" src={item.iconWhite} alt="icon-tab" />
                  </>
                ) : (
                  <img className="tab" src={item.iconOrange} alt="icon-tab" />
                )}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default SideBar;
