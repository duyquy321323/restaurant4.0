import { useParams } from "react-router-dom";

function EditFood(){
    const { id } = useParams(); // lấy id của food qua tên miền
    return(
        <>
            EditFood
        </>
    );
}

export default EditFood;