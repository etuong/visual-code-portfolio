import Link from "next/link";

import { BsEnvelope } from "react-icons/bs";
import { SlPencil } from "react-icons/sl";
import { TfiWorld } from "react-icons/tfi";
import { VscCode } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";

import { useRouter } from "next/router";
import { VscFiles } from "react-icons/vsc";
import styles from "../styles/SideBar.module.css";

const sideBarTopItems = [
  {
    Icon: VscFiles,
    path: "/",
  },
  {
    Icon: TfiWorld,
    path: "/world",
  },
  {
    Icon: VscCode,
    path: "/projects",
  },
  {
    Icon: SlPencil,
    path: "/articles",
  },
  {
    Icon: BsEnvelope,
    path: "/contact",
  },
];

const sideBarBottomItems = [
  {
    Icon: VscAccount,
    path: "/about",
  },
  {
    Icon: VscSettingsGear,
    path: "/settings",
  },
];

const renderSideBarItem = (items) => {
  const router = useRouter();
  return items.map(({ Icon, path }) => (
    <Link href={path} key={path} index={path}>
      <div
        className={`${styles.iconContainer} ${
          router.pathname === path && styles.active
        }`}
      >
        <Icon
          fill={
            router.pathname === path
              ? "rgb(225, 228, 232)"
              : "rgb(106, 115, 125)"
          }
          className={styles.icon}
        />
      </div>
    </Link>
  ));
};

const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <div>{renderSideBarItem(sideBarTopItems)}</div>
      <div>{renderSideBarItem(sideBarBottomItems)}</div>
    </aside>
  );
};

export default SideBar;
