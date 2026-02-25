import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["menu-icon-container"]}>
        <span className={`${styles["icon"]} ${styles["menu-icon"]}`}></span>
      </div>
      <div>
        <h3 className={styles["header-title"]}>Super Fucking Reddit</h3>
      </div>
      <div>
        <input type="text" className={styles["header-search-bar"]} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
