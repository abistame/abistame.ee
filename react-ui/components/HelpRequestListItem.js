import cc from 'classcat';
import styles from './HelpRequestListItem.module.scss';

export default ({text}) => (
  <div className={cc(["row", "centerPrimary", styles.wrapper])}>
    <div className={styles.bubble} />
    <div className={styles.text}>{text}</div>
    <img className={styles.arrow} src="/arrowBlue.png" />
  </div>
);
