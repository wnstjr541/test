import React from 'react';
import styles from './new.module.css'

const New = () => {
        return(
            <Nav>
                <NewList></NewList>
                <Baner></Baner>
            </Nav>
        )
    };

    const Nav = (props) => {

        return(
            <div className={styles.newNav}>
                <h2>새소식</h2>
                <h4>전체보기</h4>
                {props.children}
            </div>
        )
    };
    const NewList = (props) => {

        return(
            <div className={styles.newContainer}>  
                <ul className={styles.newBox}>
                    <li className={styles.imgList}><img src="../img.jpg" alt="" className={styles.img}/></li>
                    <li className={styles.imgList}><img src="../img.jpg" alt="" className={styles.img}/></li>
                    <li className={styles.imgList}><img src="../img.jpg" alt="" className={styles.img}/></li>
                    <li className={styles.imgList}><img src="../img.jpg" alt="" className={styles.img}/></li>
                </ul>
                <ul className={styles.newBox}>
                    <li className={styles.imgList}><img src="../img.jpg" alt="" className={styles.img}/></li>
                    <li className={styles.imgList}><img src="../img.jpg" alt="" className={styles.img}/></li>
                    <li className={styles.imgList}><img src="../img.jpg" alt="" className={styles.img}/></li>
                    <li className={styles.imgList}><img src="../img.jpg" alt="" className={styles.img}/></li>
                </ul>
                {props.children}
            </div>
        )
    };
    const Baner = (props) => {
    
        return(
            <>
                {props.children}
            </>
        )
    };

export default New;