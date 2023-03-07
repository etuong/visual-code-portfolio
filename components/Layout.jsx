import TitleBar from "./TitleBar";
import SideBar from "./SideBar";
import Explorer from "./Explorer";
import BottomBar from "./BottomBar";
import TabsBar from "./TabsBar";
import styles from "../styles/Layout.module.css";
import { ExplorerProvider } from "../contexts/ExplorerContext";

const Layout = ({ children }) => {
  return (
    <ExplorerProvider>
      <TitleBar />
      <div className={styles.main}>
        <SideBar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <TabsBar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <BottomBar />
    </ExplorerProvider>
  );
};

export default Layout;
