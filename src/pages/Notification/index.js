import { useEffect } from "react";
import api from "../../api";
import SortIcon from "../../assets/icon/Filter.svg";
import Table from "../../components/Table";
import { useDispatch } from "react-redux";
import { useSnackbar } from "../../components/SnackbarContext";
import { closeBackDrop, openBackDrop } from "../../redux/action";

function Notification(){

    // const [listItem, setListItem] = useState();
    const dispatch = useDispatch();
    const { showSnackbar } = useSnackbar();
    const listItem = Array(20).fill({
        customer: "Eren Jaegar",
        menuItem: "0373071643",
        price: `21/19 Trung tâm hành chính`,
        rating: 'completed',
    });

    async function getListOrderTable(){
        try{
            dispatch(openBackDrop());
            const response = await api.get(`admin/tableBooking/list`);
            console.log(response);
        }catch(e){
            showSnackbar("Lỗi kết nối");
        }
        dispatch(closeBackDrop());
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