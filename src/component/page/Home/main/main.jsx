import React from 'react';
import styles from './main.module.css'
import { FaLinux } from 'react-icons/fa'

const Main = () => {
        return(
            <Mid>
                <Service></Service>
                <Event></Event>
                <Icon></Icon>
            </Mid>
        )
    };

    const Mid = (props) => {
        return(
            <div className={styles.midContainer}>
                {props.children}
            </div>
        )
    }
    const Service = (props) => {

        return(
            <>
                <h2>주요 서비스</h2>
                <ul className={styles.midIcon}>
                    <li>공공서비스예약</li>
                    <li>응답소</li>
                    <li>민주주의서울</li>
                    <li>서울일자리</li>
                    <li>부동산정보</li>
                    <li>평생학습포털</li>
                    <li>서울복지포털</li>
                </ul>
                {props.children}
            </>
        )
    };
    const Event = (props) => {

        return(
            <div className={styles.eventContainer}>  
            <div className={styles.eventBox}>
                <h2>이벤트 신청</h2>
                <ul className={styles.event}>
                    <li><em>행정</em> 내손안에 서울1</li>
                    <li><em>환경</em> 내손안에 서울2</li>
                    <li><em>행정</em> 내손안에 서울3</li>
                    <li><em>문화</em> 내손안에 서울4</li>
                    <li><em>문화</em> 내손안에 서울5</li>
                </ul>
            </div>
            <div className={styles.eventBox}>
                <h2>이달의 행사 및 축제</h2>
                <ul className={styles.event}>
                    <li><em>행정</em> 내손안에 서울1</li>
                    <li><em>환경</em> 내손안에 서울2</li>
                    <li><em>행정</em> 내손안에 서울3</li>
                    <li><em>문화</em> 내손안에 서울4</li>
                    <li><em>문화</em> 내손안에 서울5</li>
                </ul>
            </div>
            <div className={styles.eventBox}>
                <h2>자주찾은 서비스</h2>
                <ul className={styles.event}>
                    <li><em>행정</em> 내손안에 서울1</li>
                    <li><em>환경</em> 내손안에 서울2</li>
                    <li><em>행정</em> 내손안에 서울3</li>
                    <li><em>문화</em> 내손안에 서울4</li>
                    <li><em>문화</em> 내손안에 서울5</li>
                </ul>
            </div>
            {props.children}
            </div>
        )
    };
    const Icon = (props) => {
    
        return(
            <div className={styles.icons}>
                <h2>분야별 정보</h2>
                <FaLinux size="40" className={styles.icon}/>
                <FaLinux size="40" className={styles.icon}/>
                <FaLinux size="40" className={styles.icon}/>
                <FaLinux size="40" className={styles.icon}/>
                <FaLinux size="40" className={styles.icon}/>
                {props.children}
            </div>
        )
    };

export default Main;