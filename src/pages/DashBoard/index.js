import "./DashBoard.css";
import Table from "../../components/Table";
import SortIcon from "../../assets/icon/Filter.svg";
import money from "../../assets/icon/Money.svg";
import people from "../../assets/icon/People.svg";
import dishes from "../../assets/icon/Dishes.svg";
function DashBoard(){
    const listItem = Array(20).fill({
        customer: "Eren Jaegar",
        menuItem: "Spicy seasoned seafood noodles ",
        price: `$125`,
        rating: 'completed',
    });
    const headTableList = ["Customer", "Menu Items", "Total payment", "Status"];
    return (
        <div className="container_dashboard">
            <div className="box1">
                <div className="item">
                    <div className="box1-1">
                        <image className="box1-1-img" src={money} alt="money"></image>
                        <div className="box1-1-context">+32%</div><div/>
                    </div>
                </div>
            </div>
            <div>
                <div className="container-history">
                    <div className="header-history">
                        <h1 className="title-history">Order report</h1>
                        <button className="sort-btn-history">
                            <img src={SortIcon} alt="SortIcon"/>
                            <h2>Filter Order</h2>
                        </button>
                    </div>
                    <Table headTableList={headTableList} bodyTableList={listItem}/>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;