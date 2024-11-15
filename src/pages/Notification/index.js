import Table from "../../components/Table";
import SortIcon from "../../assets/icon/Filter.svg";

function Notification(){

    // const [listItem, setListItem] = useState();
    const listItem = Array(20).fill({
        customer: "Eren Jaegar",
        menuItem: "Spicy seasoned seafood noodles ",
        price: `$125`,
        rating: 'completed',
    });
    
    const headTableList = ["Customer", "Menu Items", "Number Of Table", "Status"];

    return(
        <>
            <div className="container-history">
                <div className="header-history">
                    <h1 className="title-history">Table Reservation Statistics</h1>
                    <button className="sort-btn-history">
                        <img src={SortIcon} alt="SortIcon"/>
                        <h2>Filter Order</h2>
                    </button>
                </div>
                <Table headTableList={headTableList} bodyTableList={listItem}/>
            </div>
        </>
    );
}

export default Notification;