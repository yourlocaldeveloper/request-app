import { MainContainer } from './components/views/MainContainer';

import styles from './App.module.scss';
import { SideNav } from './components/organisms/SideNav';

export function App() {
  return (
    <div className={styles.app}>
      <SideNav />
      <MainContainer />
    </div>
  );
}
