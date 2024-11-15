import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import OrderItem from "../OrderItem";
import "./ShoppingCard.css";
function ShoppingCard() {
  const location = useLocation();
  const listItem = useSelector(state => state.orderAction);
  const totalPrice = useSelector(state => state.sumOrderAction);

  return (
    <>
      <div className="container-shopping-card">
        <div className="container-order">
          <div className="header">
            <h1 className="title">Orders</h1>
            <div className="title-shopping-card">
              <div className="text-content">Items</div>
              <div className="block-qty-price">
                <div className="text-content">Qty</div>
                <div className="text-content">Price</div>
              </div>
              <div className="divider"></div>
            </div>
          </div>
          <div className="content-shopping-card">
            {listItem.map((item) => <OrderItem item={item} />)}
          </div>
          <div className="total">
            <div className="title-total">Sub total</div>
            <div className="price-total"><pre>$ {Number(totalPrice).toFixed(2)}</pre></div>
          </div>
        </div>

        <div className="footer">
          <button className="submit-btn-shopping-card">
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
}
export default ShoppingCard;
