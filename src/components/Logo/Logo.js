import React from 'react';

const styleImg={
    height:'100%',
}
const styleDiv={
    backgroundColor:'#fff',
    pading:'8px',
    height:'80%',
    boxSizing:'border-box',
    borderRadius:'5pc',
}
const logo=(props)=>(
    <div style={styleDiv}>
        <img src='#' style={styleImg} alt="CastleBuilder"/>
    </div>
)

export default logo;
