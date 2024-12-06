import { NavLink, Outlet, useLocation } from "react-router-dom";
import DiscountGray from "../../../assets/icon/Discount-Gray.svg";
import DiscountOrange from "../../../assets/icon/Discount-Orange-small.svg";
import HeartGray from "../../../assets/icon/Heart-Gray.svg";
import HeartOrange from "../../../assets/icon/Heart-Orange.svg";
import "./SettingLayout.css";

function SettingLayout() {
  const location = useLocation();

  const listTab = [
    {
      iconGray: HeartGray,
      iconOrange: HeartOrange,
      title: "Cập nhật thông tin cá nhân",
      detail: "Cập nhật tên, địa chỉ, số điện thoại, v.v",
      pathname: "/update-information",
    },
    {
      iconGray: DiscountGray,
      iconOrange: DiscountOrange,
      title: "Quản lý thức ăn",
      detail: "Quản lý thức ăn của bạn, giá tiền, v.v",
      pathname: "/product-manager",
    },
  ];
  return (
    <>
      <div className="content-container">
        <div className="container-setting-layout">
          {listTab.map((item) => (
            <>
              <NavLink to={"/setting" + item.pathname}>
                <div
                  className={
                    "container-component-setting-tab " +
                    (location.pathname.includes(item.pathname)
                      ? " tab-active"
                      : "")
                  }
                >
                  <div className="inner-tab">
                    {location.pathname.includes(item.pathname) ? (
                      <div className="frame-icon">
                        <img src={item.iconOrange} alt="icon" />
                      </div>
                    ) : (
                      <div className="frame-icon">
                        <img src={item.iconGray} alt="icon" />
                      </div>
                    )}
                    <div className="frame-content">
                      <h3 className="title">{item.title}</h3>
                      <p className="detail">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </>
          ))}
        </div>
        <div className="content-setting-outlet" style={{flex: 1}}>
        <Outlet />
        </div>
      </div>
    </>
  );
}

export default SettingLayout;
