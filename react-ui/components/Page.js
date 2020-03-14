import styles from './Page.module.scss';

export default ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);
