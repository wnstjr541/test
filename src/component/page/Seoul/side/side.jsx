import React from 'react';
import styles from './side.module.css'

const side = (props) => {
    return(
        <Menu>
        </Menu>
    )
};

const Menu = (props) => {

    return(
        <div className={styles.sideContainer}>
            <h2 className={styles.sidetitle}>서울소식</h2>
            <ul className={styles.sidebox}>
                <li>새소식</li>
                <li>공고</li>
                <li>보도, 해명자료</li>
                <li>내손안에 서울</li>
                <li>서울사랑</li>
                <li>내친구서울</li>
            </ul>
            {props.children}
        </div>
    )
}
export default side;