import "./Menu.css";
import Food1 from "../../assets/image/Image 1.svg";
import Food2 from "../../assets/image/Image 2.svg";
import Food3 from "../../assets/image/Image 3.svg";
import Food4 from "../../assets/image/Images.svg";
import Food5 from "../../assets/image/Image 6.svg";
import Food6 from "../../assets/image/Image 7.svg";
import Food7 from "../../assets/image/Image 8.svg";
import Food8 from "../../assets/image/Image 9.svg";
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
      image: Food4,
      name: "Hot spicy fried rice with omelet",
      priceItem: "$ 3.49",
      quantity: 1,
      note: "",
      store: 13,
      price: 3.49,
    },
    {
      image: Food5,
      name: "Spicy instant noodle",
      priceItem: "$ 3.59",
      quantity: 1,
      note: "",
      store: 17,
      price: 3.59,
    },
    {
      image: Food6,
      name: "Healthy noodle with spinach leaf",
      priceItem: "$ 3.29",
      quantity: 1,
      note: "",
      store: 22,
      price: 3.29,
    },
    {
      image: Food7,
      name: "Hot spicy fried rice with omelet",
      priceItem: "$ 3.49",
      quantity: 1,
      note: "",
      store: 13,
      price: 3.49,
    },
    {
      image: Food8,
      name: "Spicy instant noodle with special omelette",
      priceItem: "$ 3.59",
      quantity: 1,
      note: "",
      store: 17,
      price: 3.59,
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
      image: Food4,
      name: "Hot spicy fried rice with omelet",
      priceItem: "$ 3.49",
      quantity: 1,
      note: "",
      store: 13,
      price: 3.49,
    },
    {
      image: Food5,
      name: "Spicy instant noodle",
      priceItem: "$ 3.59",
      quantity: 1,
      note: "",
      store: 17,
      price: 3.59,
    },
    {
      image: Food6,
      name: "Healthy noodle with spinach leaf",
      priceItem: "$ 3.29",
      quantity: 1,
      note: "",
      store: 22,
      price: 3.29,
    },
    {
      image: Food7,
      name: "Hot spicy fried rice with omelet",
      priceItem: "$ 3.49",
      quantity: 1,
      note: "",
      store: 13,
      price: 3.49,
    },
    {
      image: Food8,
      name: "Spicy instant noodle with special omelette",
      priceItem: "$ 3.59",
      quantity: 1,
      note: "",
      store: 17,
      price: 3.59,
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
      image: Food4,
      name: "Hot spicy fried rice with omelet",
      priceItem: "$ 3.49",
      quantity: 1,
      note: "",
      store: 13,
      price: 3.49,
    },
    {
      image: Food5,
      name: "Spicy instant noodle",
      priceItem: "$ 3.59",
      quantity: 1,
      note: "",
      store: 17,
      price: 3.59,
    },
    {
      image: Food6,
      name: "Healthy noodle with spinach leaf",
      priceItem: "$ 3.29",
      quantity: 1,
      note: "",
      store: 22,
      price: 3.29,
    },
    {
      image: Food7,
      name: "Hot spicy fried rice with omelet",
      priceItem: "$ 3.49",
      quantity: 1,
      note: "",
      store: 13,
      price: 3.49,
    },
    {
      image: Food5,
      name: "Spicy instant noodle",
      priceItem: "$ 3.59",
      quantity: 1,
      note: "",
      store: 17,
      price: 3.59,
    },
    {
      image: Food6,
      name: "Healthy noodle with spinach leaf",
      priceItem: "$ 3.29",
      quantity: 1,
      note: "",
      store: 22,
      price: 3.29,
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
