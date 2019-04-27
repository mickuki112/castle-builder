import React from 'react';
import BrickOfType from './Brick/Brick';
import styles from './Castle.module.css';

const castle =(props)=>{
    /*let transformedComponents = Object.keys(props.components)
        .map(comKey=>{
            return [...Array(props.components[comKey])].map((_,i)=>{
                return<BrickOfType type={comKey} key={comKey+i}/>;
            });
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[]);*/
        const styleVerse={
            display: 'flex',
            justifyContent: 'center',
            width:'100%',
            //margin:'auto',
        }
    let transformedComponents = props.components.map((column,i)=>{
            return <div style={styleVerse} key={i}>{column.map((verse,j)=>{
                return <BrickOfType
                    added={()=>props.added(verse,[i,j])}
                    type={verse}
                    key={verse+j}
                    styleComponents={props.styleComponents}/>
            })}</div>
        })
    //if(transformedComponents.length===0){
    //    transformedComponents=<BrickOfType type='stoneBrick' />;
    //}
    return(
        <div className={styles.styleBuilder}>
            {transformedComponents}
        </div>
    );
};

export default castle;
