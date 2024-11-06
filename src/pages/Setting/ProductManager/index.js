import { useEffect, useRef, useState } from "react";
import api from "../../../api";
import PlusIcon from "../../../assets/icon/Plus 24px.svg";
import ItemProductManagement from "../../../components/ItemProductManagement";
import "./ProductManager.css";
import { useNavigate } from "react-router-dom";

function ProductManager(){

    const listNav = ["Main Course", "Appetizer", "Dessert", "Drink"]; // Danh sách các danh mục
    const listNavPath = ["main-course", "appetizer", 'dessert', 'drink']; // Danh sách các slug theo danh mục
    const [listFood, setListFood] = useState([]);
    const [page, setPage] = useState(1);
    const [slugStorage, setSlugStorange] = useState(listNavPath.at(0));
    const componentRef = useRef(null);
    const navigate = useNavigate();

    // Call api lấy thức ăn theo slug
    async function getFoodByCategory(slug, pageReq = page){
        try{
            const response = await api.get(`menu/${slug}?keyword=&sortKey=&sortValue=&page=${pageReq}`);
            const {data} = response.data;
            console.log(data);
            if(Array.from(data).length > 0){
                setListFood(prev => [
                    ...prev,
                    ...data
                ])
            }
                
        }catch(e){
            console.error(e);
        }
    }

    // Action của navbar khi nhấn vào
    function handleActive(e){
        const listTag = document.querySelectorAll(".nav-bar-product-management div");
        Array.from(listTag).map((item) => (
            item.className = ""
        ))
        e.target.className = "active-nav-pro-mana";
        console.log(e);
        const category = e.target.innerHTML;
        const index = listNav.indexOf(category);
        if(index || index === 0){
            setSlugStorange(listNavPath.at(index));
        }
        if(listNavPath.at(index) !== slugStorage){
            setListFood([]);
        }
        setPage(1);
    }

    // khi mà slug thay đổi thì lấy danh sách thức ăn mới
    useEffect(() => {
        getFoodByCategory(slugStorage);
    }, [slugStorage])

    function handleAddNewFood(e){
        navigate("/setting/product-manager/add-new-food");
    }

    // Mới vào trang thì tự load navbar đầu tiên
    useEffect(() => {
        const item1 = document.querySelector(".item0");
        if(item1)
            item1.className = "active-nav-pro-mana";
    }, [])

    // Kiểm tra nếu mà người dùng kéo xuống thì sẽ load thêm trang
    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = componentRef.current;
                if (scrollTop + clientHeight >= scrollHeight - 100) {
                    setPage((prevPage) => {
                        const newPage = prevPage + 1
                        console.log(newPage); // In ra giá trị mới của page
                        getFoodByCategory(slugStorage, newPage);
                        return newPage;
                    });
                }
            }
        };

        const refCurrent = componentRef.current;
        if (refCurrent) {
            refCurrent.addEventListener('scroll', handleScroll);
        }

        // Cleanup sự kiện khi component bị hủy
        return () => {
            if (refCurrent) {
                refCurrent.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return(
        <>
            <div className="container-product-management">
                <h1 className="title-product-management">Products Management</h1>
                <div className="nav-bar-product-management">
                    {listNav.map((item, index) => <div className={"item" + index} onClick={handleActive}>{item}</div>)}
                </div>
                <div ref={componentRef} className="content-product-management">
                    <div className="add-frame" onClick={handleAddNewFood}>
                        <img src={PlusIcon} alt="PlusIcon"/>
                        <h2 className="placeholder-btn">Add new dish</h2>
                    </div>
                    {listFood.map((item) => <ItemProductManagement item={item} />)}
                </div>
                <div className="group-btn">
                    <button className="discard-changes btn-pro">Discard Changes</button>
                    <button className="save-changes btn-pro">Save Changes</button>
                </div>
            </div>
        </>
    );
}

export default ProductManager;