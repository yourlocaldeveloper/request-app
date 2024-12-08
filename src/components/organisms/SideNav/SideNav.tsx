import cn from 'classnames';
import {
  faHome,
  faEnvelope,
  faRightFromBracket,
  faShop,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { SideNavButton } from '@/components/molecules/SideNavButton';

import styles from './SideNav.module.scss';

interface SideNavProps {
  menuOpen: boolean;
}

export const SideNav: React.FC<SideNavProps> = (props) => {
  const { menuOpen } = props;

  return (
    <ul className={cn({ [styles.menuOpen]: menuOpen }, styles.sideNav)}>
      <li>
        <SideNavButton icon={faHome} text={'Home'} active />
      </li>
      <li>
        <SideNavButton icon={faEnvelope} text={'Request'} />
      </li>
      <li>
        <SideNavButton icon={faSquareCheck} text={'Completed Tasks'} />
      </li>
      <li>
        <SideNavButton icon={faShop} text={'Shop'} />
      </li>
      <li className={styles.lastItem}>
        <SideNavButton icon={faRightFromBracket} text={'Logout'} />
      </li>
    </ul>
  );
};
