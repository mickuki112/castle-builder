import React from 'react';
import Aux from '../../../hoc/Aux';

const summaryBrick=(props)=>{

    return(
        <Aux>
            <p>{props.counterBrick}</p>
            <button onClick={props.clicked}> </button>
        </Aux>
    );
}

export default summaryBrick;
