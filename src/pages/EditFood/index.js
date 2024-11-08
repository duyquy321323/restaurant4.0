import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import ImageIcon from "../../assets/icon/Vector.svg";

function EditFood() {
  const { slug } = useParams(); // lấy id của food qua tên miền
  const [food, setFood] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
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

  function handleChange(e){
    console.log(e);
    const {name, value} = e.target;
    setFood(prev => ({
      ...prev,
      [name]: value,  
    }))
  }

  return (
    <>
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
                  type="file"
                />
              </div>
            </div>
            <div className="group-btn group-btn-ui">
              <button className="discard-changes btn-pro">
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
