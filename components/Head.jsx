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
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Ethan Uong",
};
