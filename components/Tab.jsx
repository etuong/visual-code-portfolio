import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Tab.module.css";
import { VscClose } from "react-icons/vsc";

const Tab = ({ icon, filename, path }) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
        <VscClose className={styles.close} />
      </div>
    </Link>
  );
};

export default Tab;
