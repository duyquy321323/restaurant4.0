import { CiTimer } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import "./Home.css";
const ActionButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="action-container"> 
      <div className="action-buttons">
        <CiTimer className='icon' /> 
        <button className="action-btn" onClick={() => navigate("/menu")}>Menu</button>
        <button className="action-btn1">Getting Delivery</button>
        <button className="action-btn2">Book a Table</button>
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
