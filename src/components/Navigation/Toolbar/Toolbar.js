import React from'react';
import styles from'./Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar =(props)=>(
        <header className={styles.Toolbar}>
            <div className={styles.DrawerToggle} onClick={props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <h1>Castle Builder</h1>
            <nav className={styles.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
);

export default toolbar;
