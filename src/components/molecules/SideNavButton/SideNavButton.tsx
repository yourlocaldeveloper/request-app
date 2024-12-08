import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './SideNavButton.module.scss';

interface SideNavButtonProps {
  icon: IconProp;
  active?: boolean;
  disabled?: boolean;
  text?: string;
}

export const SideNavButton: React.FC<SideNavButtonProps> = (props) => {
  const { icon, active, disabled, text } = props;

  return (
    <button
      className={cn(
        styles.iconButton,
        { [styles.active]: active },
        { [styles.disabled]: disabled }
      )}
    >
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      {text && <p>{text}</p>}
    </button>
  );
};
