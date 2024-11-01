import "./ShoppingCard.css";
import { useLocation } from "react-router-dom";
import TrashIcon from "../../assets/icon/Trash-orange-black.svg"
function ShoppingCard() {
  const location = useLocation();

  return (
    <>
      <div className="container-shopping-card">
          <div className="container">
            <div className="header">
              <h1 className="title">
                Orders
              </h1>
              <div className="text">Items</div>
              <div className="text">Qty</div>
              <div className="text">Price</div>
              <div className="divider"></div>
            </div>
            <div className="content">
            
            </div>
            <div className="footer">
            
            </div>
            
          </div>
      </div>
    </>
  );
}
export default ShoppingCard;
