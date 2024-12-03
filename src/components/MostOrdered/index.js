import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MostOrderItem from "../MostOrderItem";
import Payment from "../Payment";
import SortIcon from "../../assets/icon/Filter.svg";
import "./MostOrdered.css";
import { openPayment } from "../../redux/action";
function MostOrdered() {
  const location = useLocation();
  //const listItem = useSelector(state => state.orderAction);
  const totalPrice = useSelector(state => state.sumOrderAction);
  const dispatch = useDispatch();
  
  const listItem = [
    {
        image:"image",
        name:"name",
        quantity:"quantity",
    },
    {
        image:"image1",
        name:"name2",
        quantity:"quantity3",
    }
  ]

  return (
    <>
      <div className="container-order-item">
        <div className="container-order">
          <div className="header">
            <h1 className="title">Most Ordered</h1>
            {/* <button className="sort-btn-mofood">
                    <img src={SortIcon} alt="SortIcon"/>
                    <h2>Filter Order</h2>
            </button> */}
            <div className="title-order-item">
              <div className="divider"></div>
            </div>
          </div>
          <div className="content-order-item">
            {listItem.map((item) => <MostOrderItem item={item} />)}
          </div>
        </div>

        <div className="footer">
          <button className="submit-btn-order-item">
            View all
          </button>
        </div>
      </div>
      <Payment />
    </>
  );
}
export default MostOrdered;
