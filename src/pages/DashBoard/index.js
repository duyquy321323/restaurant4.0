import "./DashBoard.css";
import Table from "../../components/Table";
import SortIcon from "../../assets/icon/Filter.svg";
import money from "../../assets/icon/Money.svg";
import people from "../../assets/icon/People.svg";
import dishes from "../../assets/icon/Dishes.svg";
import UpIcon from "../../assets/icon/UpIcon.svg";
import DownIcon from "../../assets/icon/DownIcon.svg";

function DashBoard(){
    const data = [
    {
        img: money,
        context: '+32.40%',
        title: 'Total Revenue',
        value: '$10,243.00',
    },
    {
        img: dishes,
        context: '-12.40%',
        title: 'Total Dish Ordered',
        value: '23,456',
    },
    {
        img: people,
        context: '+2.40%',
        title: 'Total Customer',
        value: '1,234',
    },
    ];
    const listItem = Array(20).fill({
        customer: "Eren Jaegar",
        menuItem: "Spicy seasoned seafood noodles ",
        price: `$125`,
        rating: 'completed',
    });
    const headTableList = ["Customer", "Menu Items", "Total payment", "Status"];

    const mostOrderedItems = [
        { 
            name: 'Spicy seasoned seafood noodles', 
            orders: '200 dishes ordered' 
        },
        { 
            name: 'Salted pasta with mushroom sauce', 
            orders: '120 dishes ordered' 
        },
    ];

    return (
        <div className="container_dashboard">
            <div className="box1">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <div className="box1-1">
              <img className="box1-1-img" src={item.img} alt={item.title} />
              <div className="box1-1-context">
                {item.context}
                <img
                  src={parseFloat(item.context) > 0 ? UpIcon : DownIcon}
                  alt={parseFloat(item.context) > 0 ? 'up' : 'down'}
                  className="percent-icon"
                />
              </div>
            </div>
            <div className="title">{item.title}</div>
            <div className="value">{item.value}</div>
          </div>
        ))}
      </div>

            <div className="box2">
                <div className="container-history">
                    <div className="header-history">
                        <h1 className="title-history">Order report</h1>
                        <button className="sort-btn-history">
                            <img src={SortIcon} alt="SortIcon" />
                            <h2>Filter Order</h2>
                        </button>
                    </div>
                    <Table headTableList={headTableList} bodyTableList={listItem} />
                </div>
            </div>
        </div>
    );
}

export default DashBoard;