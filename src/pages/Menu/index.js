import "./Menu.css";
import Food1 from "../../assets/image/Image 1.svg";
import Food2 from "../../assets/image/Image 2.svg";
import Food3 from "../../assets/image/Image 3.svg";
import Food4 from "../../assets/image/Images.svg";
import Food5 from "../../assets/image/Image 6.svg";
import Food6 from "../../assets/image/Image 7.svg";
import Food7 from "../../assets/image/Image 8.svg";
import Food8 from "../../assets/image/Image 9.svg";
import api from "../../api";
import ItemMenu from "../../components/ItemMenu";
import { useEffect, useState } from "react";

function Menu() {
  const [listItem, setListItem] = useState([]);
 
  async function getMenu() {
    try{
      const response = await api.get("menu");
      setListItem(response.data.data);
    }catch(e){
      console.error(e);
    }
  }

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <section className="container-menu">
        <div className="title-menu">Choose Dishes</div>
        <div className="content-menu">
          {listItem.map((item) => <ItemMenu item={item}/>)}
        </div>
      </section>
    </>
  );
}

export default Menu;
