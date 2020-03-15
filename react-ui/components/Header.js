import Link from "next/link";
import cc from "classcat";
import styles from "./Header.module.scss";

export default ({ children, title, isRequest }) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <Link href="/">
        <a>abistame!</a>
      </Link>
      <Link href="/">
        <img className={styles.menu} src="/menu.png" />
      </Link>
    </div>
    {children}
    <div className={cc(["row", styles.footer])}>
      {title ? (
        <div className={styles.footerItem}>{title}</div>
      ) : (
        <>
          <Link href="/">
            <a
              className={cc([
                styles.navItem,
                { [styles.navItemActive]: isRequest }
              ])}
            >
              Vajan abi
            </a>
          </Link>
          <Link href="/pakun">
            <a
              className={cc([
                styles.navItem,
                { [styles.navItemActive]: !isRequest }
              ])}
            >
              Pakun abi
            </a>
          </Link>
        </>
      )}
    </div>
  </div>
);
