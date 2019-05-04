import React from 'react';
import styles from './NavigationItem.module.css'
import {NavLink} from 'react-router-dom';

const NavigationItem=(props)=>(
    <li className={styles.NavigationItem}>
        <NavLink exact
        to={props.link}
        //className={props.active ? styles.active : null}>
        activeClassName={styles.active}>
        {props.children}
        </NavLink>
    </li>
)

export default NavigationItem;
