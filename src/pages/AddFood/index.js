import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import ImageIcon from "../../assets/icon/Vector.svg";
import "./AddFood.css";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeBackDrop, openBackDrop } from "../../redux/action";

function AddFood() {
  const navigate = useNavigate();
  const [formAddFood, setFormAddFood] = useState({
    file: null,
    name: "",
    description: "",
    price: "",
    category: "",
    rating: 4,
  });
  const open = useSelector((state) => state.backdropAction);
  const dispatch = useDispatch();

  async function addNewFoodApi() {
    try {
      dispatch(openBackDrop());
      await api.post("admin/dish/create", formAddFood, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(closeBackDrop());
      navigate("/setting/product-manager");
    } catch (e) {
      console.error(e);
      dispatch(closeBackDrop());
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formAddFood);
    addNewFoodApi();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    if (name !== "file") {
      setFormAddFood((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setFormAddFood((prevState) => ({
        ...prevState,
        [name]: e.target.files[0],
      }));
    }
  }

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="container-product-management">
        <h1 className="title-product-management">Thêm thức ăn mới</h1>
        <div className="main-form-ui">
          <form onSubmit={handleSubmit}>
            <div className="box-inp">
              <label htmlFor="name-and-inp">Tên thức ăn</label>
              <input
                id="name-and-inp"
                className="ui-inp"
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Enter name of dish"
              />
            </div>
            <div className="box-inp">
              <label htmlFor="description-and-inp" className="after-inp">
                Mô tả chi tiết
              </label>
              <textarea
                id="description-and-inp"
                className="ui-inp"
                name="description"
                onChange={handleChange}
                placeholder="Enter description of dish"
              />
            </div>
            <div className="grid-2-col box-grid-and">
              <div className="box-inp">
                <label htmlFor="price-and-inp">Giá</label>
                <input
                  id="price-and-inp"
                  className="ui-inp"
                  name="price"
                  type="number"
                  step="0.01"
                  onChange={handleChange}
                  placeholder="Enter price of dish"
                />
              </div>
              <div className="box-inp">
                <label htmlFor="amount-and-inp">Loại thức ăn</label>
                <input
                  id="amount-and-inp"
                  className="ui-inp"
                  name="category"
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter category of dish"
                />
              </div>
            </div>
            <div className="box-inp">
              <div className="ui-inp image-inp">
                <img src={ImageIcon} alt="Image" />
                <p>Thêm ảnh</p>
                <label htmlFor="image-and-inp" className="custom-file-label">
                  Duyệt file
                </label>
                <input
                  placeholder=""
                  id="image-and-inp"
                  className="file-input"
                  name="file"
                  onChange={handleChange}
                  type="file"
                />
              </div>
            </div>
            <div className="group-btn group-btn-ui">
              <button
                className="discard-changes btn-pro"
                type="button"
                onClick={() => navigate("/setting/product-manager")}
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

export default AddFood;
