import React from "react";
import Pagination from "@material-ui/lab/Pagination";


const Paginations = ({ count, page, handleChange } : any) =>{
    return (
        <Pagination
            count={count}
            page={page}
            size="large"
            onChange={handleChange}
            style={{
            listStyle: "none",
            color: "primary",
            marginBottom: "100px",
            }}
        />
    )
}

export default Paginations