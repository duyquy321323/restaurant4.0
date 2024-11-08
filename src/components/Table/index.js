import "./Table.css";

function Table(props){
    const {headTableList, bodyTableList} = props;
    // console.log(bodyTableList);

    return (
        <>
            <div className="container-table">
                <table>
                    <thead>
                    <tr>
                        {Array.from(headTableList).map((item, index) => <th key={index} className={"item" + index}>{item}</th>)}
                    </tr>
                    </thead>
                </table>
                    <div className="container-body-table">
                        <table>
                    <tbody>
                    {Array.isArray(bodyTableList)? 
                    <>
                        {Array.from(bodyTableList).map((item, index) => {
                            return(
                                <tr key={index}>
                                {Object.values(item).map((data, id) => <td key={id}><div>{data}</div></td>)}
                            </tr>
                            );
                        })}
                    </> : <></>
                    }
                    </tbody>
                </table>
                    </div>
            </div>
        </>
    );
}

export default Table;