import { VscWarning } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";
import { VscCheckAll } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";
import { VscSourceControl } from "react-icons/vsc";
import styles from "../styles/BottomBar.module.css";

const BottomBar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="https://github.com/etuong/visual-code-portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.section}
        >
          <VscSourceControl className={styles.icon} />
          <p>main</p>
        </a>

        <div className={styles.section}>
          <VscError className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <VscWarning className={styles.icon} />
          <p>0</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.section}>
          <TbBrandNextjs className={styles.icon} />
          <p>Powered by Next.js</p>
        </div>

        <div className={styles.section}>
          <VscCheckAll className={styles.icon} />
          <p>Prettier</p>
        </div>

        <div className={styles.section}>
          <VscBell />
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
