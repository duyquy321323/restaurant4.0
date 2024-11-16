import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import ImageIcon from "../../assets/icon/Vector.svg";
import { closeBackDrop, openBackDrop } from "../../redux/action";

function EditFood() {
  const { slug } = useParams(); // lấy id của food qua tên miền
  const [food, setFood] = useState({
    name: "",
    price: "",
    description: "",
    file: null,
    category: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.backdropAction);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(food);
    try {
      dispatch(openBackDrop());
      await api.patch(`admin/dish/edit/${slug}`, food);
      dispatch(closeBackDrop());
      navigate("/setting/product-manager");
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    async function getDish() {
      try {
        const response = await api.get(`menu/detail/${slug}`);
        setFood(response.data.dish);
      } catch (e) {
        console.error(e);
      }
    }

    getDish();
  }, [slug]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name !== "file") {
      setFood((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFood((prev) => ({
        ...prev,
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
        <h1 className="title-product-management">Edit dish</h1>
        <div className="main-form-ui">
          <form onSubmit={handleSubmit}>
            <div className="box-inp">
              <label htmlFor="name-and-inp">Name</label>
              <input
                id="name-and-inp"
                className="ui-inp"
                name="name"
                defaultValue={food.name}
                type="text"
                onChange={handleChange}
                placeholder="Enter name of dish"
              />
            </div>
            <div className="box-inp">
              <label htmlFor="description-and-inp" className="after-inp">
                Description
              </label>
              <textarea
                id="description-and-inp"
                className="ui-inp"
                name="description"
                defaultValue={food.description}
                onChange={handleChange}
                placeholder="Enter description of dish"
              />
            </div>
            <div className="grid-2-col box-grid-and">
              <div className="box-inp">
                <label htmlFor="price-and-inp">Price</label>
                <input
                  id="price-and-inp"
                  className="ui-inp"
                  name="price"
                  defaultValue={food.price}
                  type="number"
                  step="0.01"
                  onChange={handleChange}
                  placeholder="Enter price of dish"
                />
              </div>
              <div className="box-inp">
                <label htmlFor="category-and-inp">Category</label>
                <input
                  id="category-and-inp"
                  className="ui-inp"
                  name="category"
                  defaultValue={food.category}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter category of dish"
                />
              </div>
            </div>
            <div className="box-inp">
              <div className="ui-inp image-inp">
                <img src={ImageIcon} alt="Image" />
                <p>Add Image</p>
                <label htmlFor="image-and-inp" className="custom-file-label">
                  Browse Files
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
                Discard Changes
              </button>
              <button className="save-changes btn-pro" type="submit">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditFood;
