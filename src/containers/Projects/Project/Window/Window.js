import React from 'react';
import styles from './Window.module.css'

const Window =(props)=>(
    <div className={styles.Window}>
        <p className={styles.P}>{props.name}</p>
        <p className={styles.P}>{props.title}</p>
        <p className={styles.P}>{props.email}</p>
        <p className={styles.P}>{props.counterBrick}</p>
        <div className={styles.Castle}>{props.castle}</div>
        <div className={styles.Developing} onClick={props.click}>{props.buttonName}</div>
    </div>
);

 export default Window
