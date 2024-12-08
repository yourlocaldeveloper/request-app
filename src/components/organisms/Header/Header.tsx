import { Dispatch, SetStateAction } from 'react';
import {
  faBars,
  faBell,
  faCog,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { HeaderButton } from '@/components/molecules/HeaderButton';

import logo from '@/assets/logo.png';
import styles from './Header.module.scss';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { menuOpen, setMenuOpen } = props;

  const handleMenuToggle = () => {
    console.log('TEST');
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.menuContainer}>
        <HeaderButton icon={faBars} buttonFunction={handleMenuToggle} />
      </div>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt='REQUEST' />
      </div>
      <div className={styles.headerContainer}>
        <HeaderButton icon={faBell} />
        <HeaderButton icon={faCog} />
        <HeaderButton icon={faCircle} />
      </div>
    </div>
  );
};
