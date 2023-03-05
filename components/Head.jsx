import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Personal website built with visual code theme"
      />
      <meta name="keywords" content="ethan uong, vs code, portfolio" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Ethan Uong",
};
