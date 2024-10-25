import { useLocation } from "react-router-dom";
import SearchIcon from "../../assets/icon/Mask.svg";
import "./Header.css";

function Header() {
  const location = useLocation();
  const listHeader = [
    {
      path: "/menu",
      title: "Menu",
    },
    {
      path: "/dashboard",
      title: "DashBoard",
    },
    {
      path: "/notification",
      title: "Notification",
    },
    {
      path: "/setting/update-information",
      title: "Setting",
    },
    {
      path: "/setting/product-manager",
      title: "Setting",
    },
    {
      path: "/setting/product-manager/add-new-food",
      title: "Setting",
    },
    {
      path: "/setting/product-manager/edit-food",
      title: "Setting",
    },
    {
      path: "/setting",
      title: "Setting",
    },
    {
      path: "/history",
      title: "History",
    },
  ];

  const date = new Date();
  const listDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const listMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <>
      <div className="container-header">
        <div className="left-header">
          <h2 className="title-header">
            {listHeader.map((it) =>
              it.path === location.pathname ? it.title : ""
            )}
          </h2>
          <p className="date-now">
            {`${listDay[date.getDay() - 1]}, ${date.getDate()} ${
              listMonth[date.getMonth()]
            } ${date.getFullYear()}`}
          </p>
        </div>
        <div
          className={
            "right-header" +
            (location.pathname.includes("/setting") ||
            location.pathname.includes("/dashboard") ||
            location.pathname.includes("/history") ||
            location.pathname.includes("/notification")
              ? " hidden"
              : "")
          }
        >
          <input
            type="text"
            className="search-bar"
            placeholder="Search for food, coffe, etc.."
          />
          <img src={SearchIcon} alt="Search Icon" />
        </div>
      </div>
    </>
  );
}

export default Header;
