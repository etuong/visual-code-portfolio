import Titlebar from "./Titlebar";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import BottomBar from "./BottomBar";
import Tabsbar from "./Tabsbar";
import styles from "../styles/Layout.module.css";
import { ExplorerProvider } from "../contexts/ExplorerContext";

const Layout = ({ children }) => {
  return (
    <ExplorerProvider>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <BottomBar />
    </ExplorerProvider>
  );
};

export default Layout;
