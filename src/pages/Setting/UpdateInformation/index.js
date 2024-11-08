import "./UpdateInformation.css";

function UpdateInformation(){

    function handleSubmit(e){
        e.preventDefault();
        console.log(e);
    }

    function handleDiscard(e){
        console.log(e);
    }
    return(
        <>
            <div className="container-product-management">
                <div className="title-product-management">Update Information</div>
                <div className="main-form-ui">
                    <form onSubmit={handleSubmit}>
                        <div className="box-inp">
                            <label htmlFor="name-ui-inp">Name</label>
                            <input id="name-ui-inp" className="ui-inp" name="name" type="text" placeholder="Enter your name"/>
                        </div>
                        <div className="box-inp">
                            <label htmlFor="address-ui-inp">Address</label>
                            <input id="address-ui-inp" className="ui-inp" name="address" type="text" placeholder="Enter your address"/>
                        </div>
                        <div className="grid-2-col box-grid">
                            <div className="box-inp">
                                <label htmlFor="phone-ui-inp">Phone number</label>
                                <input id="phone-ui-inp" className="ui-inp" name="phone" type="text" placeholder="Enter your phone number"/>
                            </div>
                            <div className="box-inp">
                                <label htmlFor="email-ui-inp">Email</label>
                                <input id="email-ui-inp" className="ui-inp" name="email" type="email" placeholder="Enter your email"/>
                            </div>
                        </div>
                        <div className="group-btn group-btn-ui">
                            <button className="discard-changes btn-pro" onClick={handleDiscard}>Discard Changes</button>
                            <button className="save-changes btn-pro" type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdateInformation;