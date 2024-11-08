import { useState } from "react";
import SortIcon from "../../assets/icon/Filter.svg";
import Table from "../../components/Table";
import "./History.css";

function History(){

    // const [listItem, setListItem] = useState();
    const listItem = Array(20).fill({
        menuItem: "Spicy seasoned seafood noodles ",
        price: `$125`,
        rating: 'completed',
    });

    const headTableList = ["Menu Items", "Total Payment", "Rating"];

    return (
        <>
            <div className="container-history">
                <div className="header-history">
                    <h1 className="title-history">Order Report</h1>
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

export default History;