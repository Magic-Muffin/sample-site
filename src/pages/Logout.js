import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { clearToken } from "../utils";

const Logout = ({setter}) =>{
    useEffect(()=>{
        setter("");
        clearToken();
    },[]);
    
    return(
        <div>
            <Redirect from="/logout" to="/"></Redirect>
        </div>
    );
}

export default Logout;