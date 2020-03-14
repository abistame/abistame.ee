import cc from 'classcat';
import styles from './Button.module.scss';

export default ({ children, ...props }) => (
  <button className={cc(["row", "centerPrimary", styles.wrapper])} {...props}>
    {children}
  </button>
);
