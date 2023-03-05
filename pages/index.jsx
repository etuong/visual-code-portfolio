import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
import { useEffect, useContext } from "react";
import { ExplorerContext } from "../contexts/ExplorerContext";

export default function HomePage() {
  const { setExplorerItems } = useContext(ExplorerContext);

  useEffect(() => {
    setExplorerItems([
      {
        name: "home.jsx",
        path: "/",
        icon: "react_icon.svg",
      },
      {
        name: "about.html",
        path: "/about",
        icon: "html_icon.svg",
      },
      {
        name: "contact.css",
        path: "/contact",
        icon: "css_icon.svg",
      },
      {
        name: "projects.js",
        path: "/projects",
        icon: "js_icon.svg",
      },
      {
        name: "github.md",
        path: "/github",
        icon: "markdown_icon.svg",
      },
    ]);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>SOFTWARE</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Ethan Uong</h1>
            <h6 className={styles.bio}>Full Stack Engineer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
