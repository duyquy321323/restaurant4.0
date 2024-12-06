import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../api";
import { closeBackDrop, openBackDrop } from "../../../redux/action";

function AddEmployee(){

    const open = useSelector(state => state.backdropAction);
    const dispatch = useDispatch();
  const [user, setUser] = useState({
    fullname: "",
    phone: "",
    email: "",
    address: "",
    role: "",
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

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

    return(
        <>
        <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="container-product-management">
        <div className="title-product-management">Thêm nhân viên mới</div>
        <div className="main-form-ui">
          <form onSubmit={handleSubmit}>
            <div className="box-inp">
              <label htmlFor="name-ui-inp">Họ và tên</label>
              <input
                id="name-ui-inp"
                className="ui-inp"
                onChange={handleChange}
                name="fullname"
                type="text"
                placeholder="Nhập tên"
              />
            </div>
            <div className="box-inp">
              <label htmlFor="address-ui-inp">Địa chỉ</label>
              <input
                id="address-ui-inp"
                className="ui-inp"
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="Nhập địa chỉ"
              />
            </div>
            <div className="grid-2-col box-grid">
              <div className="box-inp">
                <label htmlFor="phone-ui-inp">Số điện thoại</label>
                <input
                  id="phone-ui-inp"
                  className="ui-inp"
                  onChange={handleChange}
                  name="phone"
                  type="text"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div className="box-inp">
                <label htmlFor="email-ui-inp">Email</label>
                <input
                  id="email-ui-inp"
                  className="ui-inp"
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Nhập email"
                />
              </div>
            </div>
            <div className="box-inp">
                <label htmlFor="role-ui-inp">Role</label>
                <input
                  id="role-ui-inp"
                  className="ui-inp"
                  name="role"
                  type="role"
                  placeholder="Chọn vai trò"
                />
              </div>
            <div className="group-btn group-btn-ui">
              <button
                type="button"
                className="discard-changes btn-pro"
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

export default AddEmployee;