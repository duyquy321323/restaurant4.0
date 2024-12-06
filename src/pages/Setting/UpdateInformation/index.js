import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../api";
import { closeBackDrop, openBackDrop } from "../../../redux/action";
import "./UpdateInformation.css";

function UpdateInformation() {
    const open = useSelector(state => state.backdropAction);
    const dispatch = useDispatch();
  const [user, setUser] = useState({
    fullname: "",
    phone: "",
    email: "",
    address: "",
  });

  async function updateInformation(){
    try{
        dispatch(openBackDrop());
        await api.patch(`users/edit`, user);
    }catch(e){
        console.error(e);
    }
    dispatch(closeBackDrop());
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateInformation();
  }

  function handleDiscard(e) {
    getInformation();
  }

  async function getInformation() {
    try {
        dispatch(openBackDrop());
      const response = await api.get(`users/detail`);
      console.log(response.data.user);
      setUser(response.data.user);
    } catch (e) {
      console.error(e);
    }
    dispatch(closeBackDrop());
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  useEffect(() => {
    getInformation();
  }, []);
  return (
    <>
    <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="container-product-management">
        <div className="title-product-management">Cập nhật thông tin cá nhân</div>
        <div className="main-form-ui">
          <form onSubmit={handleSubmit}>
            <div className="box-inp">
              <label htmlFor="name-ui-inp">Họ và tên</label>
              <input
                id="name-ui-inp"
                className="ui-inp"
                defaultValue={user.fullname}
                onChange={handleChange}
                name="fullname"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="box-inp">
              <label htmlFor="address-ui-inp">Địa chỉ</label>
              <input
                id="address-ui-inp"
                className="ui-inp"
                defaultValue={user.address}
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="Enter your address"
              />
            </div>
            <div className="grid-2-col box-grid">
              <div className="box-inp">
                <label htmlFor="phone-ui-inp">Số điện thoại</label>
                <input
                  id="phone-ui-inp"
                  className="ui-inp"
                  defaultValue={user.phone}
                  onChange={handleChange}
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="box-inp">
                <label htmlFor="email-ui-inp">Email</label>
                <input
                  id="email-ui-inp"
                  className="ui-inp"
                  value={user.email}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  disabled
                />
              </div>
            </div>
            <div className="group-btn group-btn-ui">
              <button
                type="button"
                className="discard-changes btn-pro"
                onClick={handleDiscard}
              >
                Hủy bỏ
              </button>
              <button className="save-changes btn-pro" type="submit">
                Lưu thay đổi
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateInformation;
