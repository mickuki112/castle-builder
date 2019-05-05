import React from 'react';
import BrickOfType from './Brick/Brick';
import styles from './Project.module.css'
const Project =(props)=>{
    const styleVerse={
        display: 'flex',
        justifyContent: 'center',
        width:'300px',

        //margin:'auto',
    }
    let transformedComponents = props.castle.map((column,i)=>{
            return <div style={styleVerse} key={i}>{column.map((verse,j)=>{
                return <BrickOfType
                key={j}
                className={styles.Brick}
                type={verse}></BrickOfType>

            })}</div>
        })
    return(
        <div>
            {transformedComponents}
        </div>
    );
};
export default Project;
