import React from 'react';
import styles from './Abaut.module.css';
import git0 from './Pictures/git0.png';
import git1 from './Pictures/git1.png';
const Abaut =(props)=>(
    <div  className={styles.Abaut}>
        <h4>Casyle Builder</h4>
        <p>
            I present another project that I
            created to learn new technolga React. the app consists in building your own castle.
        </p>
        <a href="https://github.com/mickuki112/castle-builder">
            <img className={styles.Img}src={git1}/>
            <img className={styles.Img}src={git0}/>
        </a>
    </div>
);

export default Abaut;
