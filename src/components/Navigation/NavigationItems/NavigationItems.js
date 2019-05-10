import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from'./NavigationItem/NavigationItem'

const NavigationItems=()=>(
    <ul className={styles.NavigationItems}>
        <NavigationItem link='/builder'active={true}> Castle Builder </NavigationItem>
        <NavigationItem link='/projects'> Projects </NavigationItem>
        <NavigationItem link='/abaut'> About </NavigationItem>
    </ul>
)

export default NavigationItems;
