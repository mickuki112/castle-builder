import React from 'react';
import BrickOfType from './Brick/Brick';

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
            justifyContent: 'space-between',
            width:'100px',
            textAlign: 'center',
        }
    let transformedComponents = props.components.map((column,i)=>{
            return <div style={styleVerse} key={i}>{column.map((verse,j)=>{
                return <BrickOfType
                    added={()=>props.added(verse,[i,j])}
                    type={verse}
                    key={verse+j}/>
            })}</div>
        })
    console.log(props.components);
    //if(transformedComponents.length===0){
    //    transformedComponents=<BrickOfType type='stoneBrick' />;
    //}
    return(
        <div>
            {transformedComponents}
        </div>
    );
};

export default castle;
