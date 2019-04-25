import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from'./NavigationItem/NavigationItem'

const NavigationItems=()=>(
    <ul className={styles.NavigationItems}>
        <NavigationItem link='/'active={true}>jp</NavigationItem>
        <NavigationItem link='/'>jp</NavigationItem>
        <NavigationItem link='/'>jp</NavigationItem>
    </ul>
)

export default NavigationItems;
