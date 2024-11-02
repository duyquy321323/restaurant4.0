import "./Menu.css";
import Food1 from "../../assets/image/Image 1.svg";
import Food2 from "../../assets/image/Image 2.svg";
import Food3 from "../../assets/image/Image 3.svg";
import Food4 from "../../assets/image/Images.svg";
import ItemMenu from "../../components/ItemMenu";

function Menu() {
  const listItem = [
    {
      image: Food1,
      name: "Spicy seasoned seafood noodles",
      priceItem: "$ 2.29",
      quantity: 1,
      note: "",
      store: 20,
      price: 2.29,
    },
    {
      image: Food2,
      name: "Salted Pasta with mushroom sauce",
      priceItem: "$ 2.69",
      quantity: 1,
      note: "",
      store: 11,
      price: 2.69,
    },
    {
      image: Food3,
      name: "Beef dumpling in hot and sour soup",
      priceItem: "$ 2.99",
      quantity: 1,
      note: "",
      store: 16,
      price: 2.99,
    },
    {
      image: Food4,
      name: "Healthy noodle with spinach leaf",
      priceItem: "$ 3.29",
      quantity: 1,
      note: "",
      store: 22,
      price: 3.29,
    },
    {
      image: Food1,
      name: "Spicy seasoned seafood noodles",
      priceItem: "$ 2.29",
      quantity: 1,
      note: "",
      store: 20,
      price: 2.29,
    },
    {
      image: Food1,
      name: "Spicy seasoned seafood noodles",
      priceItem: "$ 2.29",
      quantity: 1,
      note: "",
      store: 20,
      price: 2.29,
    },
    {
      image: Food2,
      name: "Salted Pasta with mushroom sauce",
      priceItem: "$ 2.69",
      quantity: 1,
      note: "",
      store: 11,
      price: 2.69,
    },
    {
      image: Food3,
      name: "Beef dumpling in hot and sour soup",
      priceItem: "$ 2.99",
      quantity: 1,
      note: "",
      store: 16,
      price: 2.99,
    },
    {
      image: Food4,
      name: "Healthy noodle with spinach leaf",
      priceItem: "$ 3.29",
      quantity: 1,
      note: "",
      store: 22,
      price: 3.29,
    },
    {
      image: Food1,
      name: "Spicy seasoned seafood noodles",
      priceItem: "$ 2.29",
      quantity: 1,
      note: "",
      store: 20,
      price: 2.29,
    },
    {
      image: Food1,
      name: "Spicy seasoned seafood noodles",
      priceItem: "$ 2.29",
      quantity: 1,
      note: "",
      store: 20,
      price: 2.29,
    },
    {
      image: Food2,
      name: "Salted Pasta with mushroom sauce",
      priceItem: "$ 2.69",
      quantity: 1,
      note: "",
      store: 11,
      price: 2.69,
    },
    {
      image: Food3,
      name: "Beef dumpling in hot and sour soup",
      priceItem: "$ 2.99",
      quantity: 1,
      note: "",
      store: 16,
      price: 2.99,
    },
    {
      image: Food4,
      name: "Healthy noodle with spinach leaf",
      priceItem: "$ 3.29",
      quantity: 1,
      note: "",
      store: 22,
      price: 3.29,
    },
    {
      image: Food1,
      name: "Spicy seasoned seafood noodles",
      priceItem: "$ 2.29",
      quantity: 1,
      note: "",
      store: 20,
      price: 2.29,
    },
  ];
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
