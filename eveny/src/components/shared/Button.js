import React from 'react';

const Button = (props)=>{
    return(
        <button className='inline-flex items-center rounded-lg bg-white px-4 py-2 
        text-center text-sm font-bold text-sky-900 hover:bg-[#FF0066]
         hover:text-white'>{props.label}</button>
    )
};


export default Button;