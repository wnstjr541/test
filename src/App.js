import { Route , Link } from 'react-router-dom';
import styles from './App.module.css';
import Home from './component/page/Home/home.jsx'
import Seoul from './component/page/Seoul/seoul'

function App() {
  return (
        <>
          <ul className={styles.nav}>
              <li>
                  <Link to ="/">서울 특별시</Link>
              </li>
              <li>
                  <Link to ="/seoul">서울소식같은 메뉴서울 특별시</Link>
              </li>
              <li>
                  로그인/등등
              </li>
          </ul>
          <div className={styles.search}>
              <h1>i love seoul</h1>
              <input type="text" />
              <h2>날씨</h2> 
          </div>
          <div>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/seoul" component={Seoul} />
          </div>
      </>
  );
}

export default App;
