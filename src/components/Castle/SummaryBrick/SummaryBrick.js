import React from 'react';
import styles from './SummaryBrick.module.css';

const summaryBrick=(props)=>{

    return(
        <div className={styles.Container}>
        Number of bricks: {props.counterBrick}
            {props.children}
            <button className={styles.Button} onClick={props.clicked}>Publish</button>
        </div>
    );
}

export default summaryBrick;
