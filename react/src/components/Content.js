import React from "react";
import '../css/Content.css';

const Content = (props)=>{
    return(
        <div className={"content"}>
            {props.children}
        </div>
    );
}

export default Content;