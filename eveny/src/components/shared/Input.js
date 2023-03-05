import React from "react";

const Input = (props)=>{
    const classes = " " + props.className;
    return(
        <div className={classes}>
            <input type={Attributes.type} placeholder={Attributes.placeholder}/>
        </div>
    )
}