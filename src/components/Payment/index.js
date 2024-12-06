import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import api from "../../api";
import BackIcon from "../../assets/icon/Back.svg";
import { closeBackDrop, closePayment, openBackDrop } from "../../redux/action";
import OrderItem from "../OrderItem";
import "./Payment.css";

function Payment() {
  const listItem = useSelector((state) => state.orderAction);
  const totalPrice = useSelector((state) => state.sumOrderAction);
  const isActive = useSelector((state) => state.paymentAction);
  const isOpenConfirmAddress = useSelector((state) => state.confirmAddressAction);
  const orderList = useSelector(state => state.orderAction);
  const sumPrice = useSelector(state => state.sumOrderAction);
  const [phone, setPhone] = useState();
  const [searchParam] = useSearchParams();
  const orderType = searchParam.get("order-type");
  const [deliveryTime, setDeliveryTime] = useState();
  const [address, setAddress] = useState();
  const dispatch = useDispatch();
  console.log(orderType)

  function handleClose() {
    dispatch(closePayment());
  }
  async function payment(order){
    try{
      const response = await api.post(`order/payment`, order);
      window.location.href = response.data.paymentLinkRes.checkoutUrl;
      getInformation();
    }catch(e){
      console.error(e);
    }
  }

  async function getInformation() {
    try {
        dispatch(openBackDrop());
      const response = await api.get(`users/detail`);
      setAddress(response.data.user.address);
      setPhone(response.data.user.phone);
    } catch (e) {
      console.error(e);
    }
    dispatch(closeBackDrop());
  }

  useEffect(() => {
    getInformation();
  }, [])

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
      phone: phone,
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
                    xác nhận thông tin
                  </h2>
                </div>
              </div>
              <div className="content-payment">
                <form onSubmit={handlePayment}>
                  <div className="top-form-payment">
                  <div className="card-name-payment">
                      <label htmlFor="">Số điện thoại</label>
                      <input
                        type="text"
                        name="confirm-phone"
                        placeholder="Nhập số điện thoại"
                        defaultValue={phone}
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        />
                        </div>
                        <div className="card-name-payment">
                      <label htmlFor="">Địa chỉ</label>
                      <input
                        type="text"
                        name="confirm-address"
                        placeholder="Nhập địa chỉ"
                        required
                        defaultValue={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                  </div>
                  <div className="bot-form-payment">
                    <div className="box-double-input">
                    <div className="card-name-payment">
                      <label htmlFor="">Chọn thời gian giao</label>
                      <input
                        type="datetime-local"
                        name="confirm-time"
                        required
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        />
                    </div>
                    </div>
                  </div>
                  <div className="box-btn-payment">
                    <button className="cancel-btn" type="button" onClick={handleClose}>
                      Hủy bỏ
                    </button>
                    <button className="confirm-btn" type="submit">Thanh Toán</button>
                  </div>
                </form>
              </div>
              <div className="container-confirm-address"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
