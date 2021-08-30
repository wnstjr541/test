import React from 'react';
import styles from './main.module.css'

const Main = () => {
    return(
        <>
            <MainHeader></MainHeader>
        </>
    )
}
const MainHeader = (props) => {
    return(
        <div className={styles.mainHeader}>
            <h2>주요 서비스</h2>
            {props.children}
            <div className={styles.boxs}>
                <div className={styles.box1}></div>
                <div className={styles.box2}></div>
                <div className={styles.box3}></div>
                <div className={styles.box4}></div>
                <div className={styles.box5}></div>
                <div className={styles.box6}></div>
                {props.children}
            </div>
        </div>
    )
}


export default Main;