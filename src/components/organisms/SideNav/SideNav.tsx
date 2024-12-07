import {
  faHome,
  faEnvelope,
  faRightFromBracket,
  faShop,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { NavButton } from '@components/molecules/NavButton';

import styles from './SideNav.module.scss';

export const SideNav: React.FC = () => {
  return (
    <ul className={styles.conatiner}>
      <li>
        <NavButton icon={faHome} text={'Home'} active />
      </li>
      <li>
        <NavButton icon={faEnvelope} text={'Request'} />
      </li>
      <li>
        <NavButton icon={faSquareCheck} text={'Completed Tasks'} />
      </li>
      <li>
        <NavButton icon={faShop} text={'Shop'} />
      </li>
      <li className={styles.lastItem}>
        <NavButton icon={faRightFromBracket} text={'Logout'} />
      </li>
    </ul>
  );
};
