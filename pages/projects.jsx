import { getProjects } from "./api/projects";
import { useEffect, useContext } from "react";
import { ExplorerContext } from "../contexts/ExplorerContext";

const ProjectsPage = ({ projects }) => {
  const { setExplorerItems } = useContext(ExplorerContext);

  useEffect(() => {
    setExplorerItems([
      {
        name: "2235435345.jsx",
        path: "/",
        icon: "react_icon.svg",
      },
      {
        name: "asdfsafd.html",
        path: "/about",
        icon: "html_icon.svg",
      },
    ]);
  }, []);

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;
