import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './HeaderButton.module.scss';

interface HeaderButtonProps {
  icon: IconProp;
  buttonFunction?: () => void;
}

export const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
  const { icon, buttonFunction } = props;

  return (
    <button className={styles.headerButton} onClick={buttonFunction}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
    </button>
  );
};
