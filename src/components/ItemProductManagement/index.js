import "./ItemProductManagement.css";
import EditIcon from "../../assets/icon/Edit.svg";
import { useNavigate } from "react-router-dom";

function ItemProductManagement(props){
    const {item} = props;
    const navigate = useNavigate();
    function handleEditFood(){
        navigate(`/setting/product-manager/edit-food/${item.slug}`);
    }
    return (
        <>
            <div className="container-ipm">
                <div className="image-ipm">
                    <img src={item.imageUrl} alt="Image"/>
                </div>
                <h1 className="title-ipm">{item.name}</h1>
                <div className="detail-ipm">
                    <pre className="price-ipm">$ {item.price}</pre>
                    <p>&bull;</p>
                    <pre className="store-ipm">{item.store} Bowls</pre>
                </div>
                <div className="edit-btn-ipm" onClick={handleEditFood}>
                    <img src={EditIcon} alt="EditIcon"/>
                    <p>Edit dish</p>
                </div>
            </div>
        </>
    );
}

export default ItemProductManagement;