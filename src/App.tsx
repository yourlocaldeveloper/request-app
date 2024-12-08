import { useEffect, useState } from 'react';
import { Header } from '@components/organisms/Header/Header';
import { MainContainer } from '@components/views/MainContainer';
import { SideNav } from '@components/organisms/SideNav';

import styles from './App.module.scss';

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log('[DEBUG]: Menu Open:', menuOpen);
  }, [menuOpen]);

  return (
    <div className={styles.app}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={styles.viewWrapper}>
        <SideNav menuOpen={menuOpen} />
        <MainContainer />
      </div>
    </div>
  );
}
