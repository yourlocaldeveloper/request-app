import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './NavButton.module.scss';

interface NavButtonProps {
  icon: IconProp;
  text: string;
  active?: boolean;
  disabled?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = (props) => {
  const { icon, text, active, disabled } = props;

  return (
    <button
      className={cn(
        styles.navButton,
        { [styles.active]: active },
        { [styles.disabled]: disabled }
      )}
    >
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      <p>{text}</p>
    </button>
  );
};
