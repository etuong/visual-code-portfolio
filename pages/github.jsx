import Image from "next/image";

const GithubPage = ({}) => {
  return (
    <>
      <h3>Projects</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "GitHub" },
  };
}

export default GithubPage;
