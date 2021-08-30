import React from 'react';
import styles from './header.module.css'

const Header = () => {
        return(
            <>
                <Baner></Baner>
            </>
        )
    };
    const Baner = (props) => {
        return(
            <div className={styles.container}>
                <div className={styles.login}>
                    <img src="../img.jpg" alt="이미지" className={styles.banner_img} />
                </div>
                <ul className={styles.side}>
                    <li>코로나 현황</li>
                    <li>예방접종 현황</li>
                    <li>서울시장 이미지</li>
                </ul>
            </div>
        )
    };

export default Header;