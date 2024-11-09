import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackIcon from "../../assets/icon/Back.svg";
import CreditCardIcon from "../../assets/icon/Card.svg";
import OkIcon from "../../assets/icon/OkIcon.svg";
import PaypalIcon from "../../assets/icon/Paypal.svg";
import PlusIcon from "../../assets/icon/Plus 24px White.svg";
import CashIcon from "../../assets/icon/Wallet.svg";
import { closeConfirmAddress, closePayment, openConfirmAddress } from "../../redux/action";
import OrderItem from "../OrderItem";
import "./Payment.css";

function Payment() {
  const listItem = useSelector((state) => state.orderAction);
  const totalPrice = useSelector((state) => state.sumOrderAction);
  const isActive = useSelector((state) => state.paymentAction);
  const isOpenConfirmAddress = useSelector((state) => state.confirmAddressAction);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const dispatch = useDispatch();
  const listMethodItem = [
    {
      icon: CreditCardIcon,
      name: "Credit Card",
    },
    {
      icon: PaypalIcon,
      name: "Paypal",
    },
    {
      icon: CashIcon,
      name: "Cash",
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
                  <h1 className="title-payment">Confirmation</h1>
                  <h2 className="title-payment-small">Order</h2>
                </div>
                <button className="add-btn-payment">
                  <img src={PlusIcon} alt="PlusIcon" />
                </button>
              </div>
              <div className="content-payment">
                {Array.from(listItem).map((item) => (
                  <OrderItem item={item} />
                ))}
              </div>
              <div className="footer-payment">
                <h3>Sub total</h3>
                <p>${Number(totalPrice).toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="payment-frame">
            <div className="main-form-payment">
              <div className="header-payment">
                <div className="box-title-payment">
                  <h1 className="title-payment">Payment</h1>
                  <h2 className="title-payment-small">
                    3 payment method available
                  </h2>
                </div>
              </div>
              <div className="content-payment">
                <h2 className="title-form-payment">Payment Method</h2>
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
                      <label htmlFor="">Cardholder Name</label>
                      <input
                        type="text"
                        name="card-name"
                        placeholder="Enter your cardholder name"
                      />
                    </div>
                    <div className="card-name-payment">
                      <label htmlFor="">Card Number</label>
                      <input
                        type="number"
                        name="card-number"
                        placeholder="Enter your card number"
                      />
                    </div>
                  </div>
                  <div className="bot-form-payment">
                    <div className="box-double-input">
                      <div className="card-name-payment">
                        <label htmlFor="">Expiration Date</label>
                        <input
                          type="date"
                          name="card-expiration-date"
                          placeholder="Choose expiration date"
                        />
                      </div>
                      <div className="card-name-payment">
                        <label htmlFor="">CVV</label>
                        <input
                          type="password"
                          name="card-cvv"
                          placeholder="Enter your cvv"
                        />
                      </div>
                    </div>
                    <div className="card-name-payment">
                      <label htmlFor="">Transfer Content</label>
                      <input
                        type="text"
                        name="card-expiration-date"
                        placeholder="Enter transfer content"
                      />
                    </div>
                  </div>
                  <div className="box-btn-payment">
                    <button className="cancel-btn" type="button" onClick={handleClose}>
                      Cancel
                    </button>
                    <button className="confirm-btn" type="submit" onClick={handleContinue}>Continue</button>
                  </div>
                </form>
              </div>
              <div className="container-confirm-address"></div>
            </div>
          </div>
        </div>
        <div className={"container-confirm-address" + (isOpenConfirmAddress? " confirm-active" : "")}>
        {/* <button className="back-up-payment" onClick={handleCloseConfirmAddress}>
              <img src={BackIcon} alt="BackIcon" />
        </button> */}
        <h1 className="title-confirm-address">Confirm Address</h1>
        <form onSubmit={handleSubmitForm2}>

        <div className="card-name-payment">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        name="card-name"
                        placeholder="Enter your name"
                        />
                    </div>
        <div className="card-name-payment">
                      <label htmlFor="">Address</label>
                      <input
                        type="text"
                        name="card-name"
                        placeholder="Enter your address"
                        />
                    </div>
        <div className="card-name-payment">
                      <label htmlFor="">Phone Number</label>
                      <input
                        type="text"
                        name="card-name"
                        placeholder="Enter your phone number"a
                        />
                    </div>
                    <div className="box-btn-payment form2">
                    <button className="cancel-btn" type="button" onClick={handleCloseConfirmAddress}>
                      Cancel
                    </button>
                    <button className="confirm-btn" type="button" onClick={handleContinue}>Continue</button>
                  </div>
                        </form>
        </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
