import { useEffect } from "react";
import api from "../../api";
import SortIcon from "../../assets/icon/Filter.svg";
import Table from "../../components/Table";

function Notification(){

    // const [listItem, setListItem] = useState();
    const listItem = Array(20).fill({
        customer: "Eren Jaegar",
        menuItem: "0373071643",
        price: `21/19 Trung tâm hành chính`,
        rating: 'completed',
    });

    async function getListOrderTable(){
        try{
            const response = await api.get(`admin/tableBooking/list`);
            console.log(response);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(() => {
        getListOrderTable();
    }, [])
    
    const headTableList = ["Tên khách hàng", "Số điện thoại", "Địa chỉ", "Trạng thái đơn hàng"];

    return(
        <>
            <div className="container-history">
                <div className="header-history">
                    <h1 className="title-history">Thống kê đặt bàn</h1>
                    <button className="sort-btn-history">
                        <img src={SortIcon} alt="SortIcon"/>
                        <h2>Lọc đơn hàng</h2>
                    </button>
                </div>
                <Table headTableList={headTableList} bodyTableList={listItem}/>
            </div>
        </>
    );
}

export default Notification;