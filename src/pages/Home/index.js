import { CiTimer } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import { useDispatch } from "react-redux";
import { deliveryAction, dineInAction } from "../../redux/action";
const ActionButtons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="action-container"> 
      <div className="action-buttons">
        <CiTimer className='icon' /> 
        <button className="action-btn" onClick={() => {
          dispatch(dineInAction());
          navigate("/menu?order-type=Dine In");
          }}>Menu</button>
        <button className="action-btn1" onClick={() => {
          dispatch(deliveryAction());
          navigate("/menu?order-type=Delivery");
          }}>Getting delivery</button>
        <button className="action-btn2" onClick={() => navigate("/book-table")} >Book a table</button>
      </div>
    </div>
  );
};
function Home() {
  return (
    <>
    <div className='home'>
      <section className="home-container">
        <h1 className="title-home">
            welcome
        </h1>
      </section>
      <ActionButtons />
      </div>
    </>

  );
}

export default Home;
