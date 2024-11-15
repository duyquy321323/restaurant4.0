import "./AddFood.css";
import ImageIcon from "../../assets/icon/Vector.svg";

function AddFood(){

    function handleSubmit(e){
        e.preventDefault();
        console.log(e);
    }

    return(
        <>
            <div className="container-product-management">
                <h1 className="title-product-management">Add new dish</h1>
                <div className="main-form-ui">
                    <form onSubmit={handleSubmit}>
                        <div className="box-inp">
                            <label htmlFor="name-and-inp">Name</label>
                            <input id="name-and-inp" className="ui-inp" name="name" type="text" placeholder="Enter name of dish"/>
                        </div>
                        <div className="box-inp">
                            <label htmlFor="description-and-inp" className="after-inp">Description</label>
                            <textarea id="description-and-inp" className="ui-inp" name="description" placeholder="Enter description of dish"/>
                        </div>
                        <div className="grid-2-col box-grid-and">
                            <div className="box-inp">
                                <label htmlFor="price-and-inp">Price</label>
                                <input id="price-and-inp" className="ui-inp" name="price" type="number" placeholder="Enter price of dish"/>
                            </div>
                            <div className="box-inp">
                                <label htmlFor="amount-and-inp">Amount</label>
                                <input id="amount-and-inp" className="ui-inp" name="amount" type="number" placeholder="Enter amount of dish"/>
                            </div>
                        </div>
                        <div className="box-inp">
                                <div className="ui-inp image-inp">
                                    <img src={ImageIcon} alt="Image"/>
                                    <p>Add Image</p>
                                    <label htmlFor="image-and-inp" className="custom-file-label">Browse Files</label>
                                    <input placeholder="" id="image-and-inp" className="file-input" type="file"/>
                                </div>
                        </div>
                        <div className="group-btn group-btn-ui">
                            <button className="discard-changes btn-pro">Discard Changes</button>
                            <button className="save-changes btn-pro" type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );  
}

export default AddFood;