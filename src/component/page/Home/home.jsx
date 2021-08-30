import React from 'react';
import Header from './header/header'
import Main from './main/main'
import New from './New/new'
import styles from './home.module.css'


const home = (props) => {
    return(
        <div className={styles.container}>
            <Header/> 
            <Main/> 
            <New/> 
        </div>
    )
};

export default home;