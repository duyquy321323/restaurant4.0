import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api";
import BackIcon from "../../assets/icon/Back.svg";
import CreditCardIcon from "../../assets/icon/Card.svg";
import OkIcon from "../../assets/icon/OkIcon.svg";
import PaypalIcon from "../../assets/icon/Paypal.svg";
import CashIcon from "../../assets/icon/Wallet.svg";
import { closeConfirmAddress, closePayment, openConfirmAddress } from "../../redux/action";
import OrderItem from "../OrderItem";
import "./Payment.css";
import { useSearchParams } from "react-router-dom";

function Payment() {
  const listItem = useSelector((state) => state.orderAction);
  const totalPrice = useSelector((state) => state.sumOrderAction);
  const isActive = useSelector((state) => state.paymentAction);
  const isOpenConfirmAddress = useSelector((state) => state.confirmAddressAction);
  const orderList = useSelector(state => state.orderAction);
  const sumPrice = useSelector(state => state.sumOrderAction);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [searchParam] = useSearchParams();
  const orderType = searchParam.get("order-type");
  const [deliveryTime, setDeliveryTime] = useState();
  const [address, setAddress] = useState();
  const dispatch = useDispatch();
  console.log(orderType)
  const listMethodItem = [
    {
      icon: CreditCardIcon,
      name: "Thẻ Tín Dụng",
    },
    {
      icon: PaypalIcon,
      name: "Paypal",
    },
    {
      icon: CashIcon,
      name: "Tiền Mặt",
    },
  ];

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
  }

  function handleClose() {
    dispatch(closePayment());
  }

  function handleChooseMethod(methodName) {
    setSelectedMethod(methodName);
  }

  function handleContinue(){
    dispatch(openConfirmAddress())
  }

  function handleCloseConfirmAddress(){
    dispatch(closeConfirmAddress());
  }

  function handleSubmitForm2(e){
    console.log(e);
  }

  async function payment(order){
    try{
      const response = await api.post(`order/payment`, order);
      window.location.href = response.data.paymentLinkRes.checkoutUrl;
    }catch(e){
      console.error(e);
    }
  }

  function handlePayment(){
    const listItem = Array.from(orderList).map(item => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      imageUrl: item.imageUrl,
      dish_id: item._id,
    }));
    const order = {
      amount: Number(Number(sumPrice).toFixed(0)),
      items: listItem,
      orderType: orderType,
      deliveryTime: deliveryTime,
      address: address,
    }
    payment(order);
  }

  return (
    <>
      {isActive ? <div className="background-shadow"></div> : <></>}
      <div className={"container-payment" + (isActive ? " active" : "") + (isOpenConfirmAddress? " confirm-active" : "")}>
        <div className="transition-payment">
        <div className="trans-1">
          <div className="confirmation-payment">
            <button className="back-up-payment" onClick={handleClose}>
              <img src={BackIcon} alt="BackIcon" />
            </button>
            <div className="main-form-payment">
              <div className="header-payment">
                <div className="box-title-payment">
                  <h1 className="title-payment">Xác nhận</h1>
                  <h2 className="title-payment-small">Đơn hàng</h2>
                </div>
              </div>
              <div className="content-payment">
                {Array.from(listItem).map((item) => (
                  <OrderItem item={item} />
                ))}
              </div>
              <div className="footer-payment">
                <h3>Tổng số tiền</h3>
                <p>{Number(totalPrice)}đ</p>
              </div>
            </div>
          </div>
          <div className="payment-frame">
            <div className="main-form-payment">
              <div className="header-payment">
                <div className="box-title-payment">
                  <h1 className="title-payment">Thanh toán</h1>
                  <h2 className="title-payment-small">
                    3 phương thức thanh toán khả dụng
                  </h2>
                </div>
              </div>
              <div className="content-payment">
                <h2 className="title-form-payment">Phương Thức Thanh Toán</h2>
                <div className="methods-payment">
                  {listMethodItem.map((item) => (
                    <div
                      key={item.name}
                      className={`method ${
                        selectedMethod === item.name ? "active-method" : ""
                      }`}
                      onClick={() => handleChooseMethod(item.name)}
                    >
                      <img src={OkIcon} alt="ok" />
                      <img src={item.icon} alt="MethodIcon" />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="top-form-payment">
                    <div className="card-name-payment">
                      <label htmlFor="">Tên chủ sở hữu</label>
                      <input
                        type="text"
                        name="card-name"
                        placeholder="Nhập tên thẻ của bạn"
                      />
                    </div>
                    <div className="card-name-payment">
                      <label htmlFor="">Số thẻ</label>
                      <input
                        type="number"
                        name="card-number"
                        placeholder="Nhập số thẻ của bạn"
                      />
                    </div>
                  </div>
                  <div className="bot-form-payment">
                    <div className="box-double-input">
                      <div className="card-name-payment">
                        <label htmlFor="">Ngày hết hạn</label>
                        <input
                          type="date"
                          name="card-expiration-date"
                          placeholder="Ngày hết hạn của thẻ"
                        />
                      </div>
                      <div className="card-name-payment">
                        <label htmlFor="">CVV</label>
                        <input
                          type="password"
                          name="card-cvv"
                          placeholder="Nhập số cvv in trên thẻ"
                        />
                      </div>
                    </div>
                    <div className="card-name-payment">
                      <label htmlFor="">Nội dung chuyển tiền</label>
                      <input
                        type="text"
                        name="card-expiration-date"
                        placeholder="Nhập nội dung"
                      />
                    </div>
                  </div>
                  <div className="box-btn-payment">
                    <button className="cancel-btn" type="button" onClick={handleClose}>
                      Hủy bỏ
                    </button>
                    <button className="confirm-btn" type="submit" onClick={orderType && orderType === "Delivery"? handleContinue : handlePayment}>{orderType && orderType === "Delivery"? "Tiếp tục" : "Thanh Toán"}</button>
                  </div>
                </form>
              </div>
              <div className="container-confirm-address"></div>
            </div>
          </div>
        </div>
        {orderType && orderType === "Delivery"?
        <div className={"container-confirm-address" + (isOpenConfirmAddress? " confirm-active" : "")}>
        <h1 className="title-confirm-address">Xác nhận thông tin giao hàng</h1>
        <form onSubmit={handleSubmitForm2}>

        <div className="card-name-payment">
                      <label htmlFor="">Chọn thời gian giao</label>
                      <input
                        type="datetime-local"
                        name="confirm-time"
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        />
                    </div>
        <div className="card-name-payment">
                      <label htmlFor="">Địa chỉ</label>
                      <input
                        type="text"
                        name="confirm-address"
                        placeholder="Nhập địa chỉ"
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="box-btn-payment form2">
                    <button className="cancel-btn" type="button" onClick={handleCloseConfirmAddress}>
                      Quay lại
                    </button>
                    <button className="confirm-btn" type="button" onClick={handlePayment}>Thanh toán</button>
                  </div>
                        </form>
        </div> : <></>}
        </div>
      </div>
    </>
  );
}

export default Payment;
