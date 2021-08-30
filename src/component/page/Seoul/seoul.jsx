import React from 'react';
import styles from './seoul.module.css'
import Side from './side/side'
import Main from './main/main'

const seoul = () => (
     <div className={styles.container}>
         <Side></Side>
         <Main></Main>
     </div>      
    );

export default seoul;