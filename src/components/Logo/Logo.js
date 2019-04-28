import React from 'react';
import icon from '../../pictures/castle.png';

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
        <img src={icon} style={styleImg} alt="CastleBuilder"/>
    </div>
)

export default logo;
