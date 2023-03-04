import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "ethanuong.com",
    href: "https://www.ethanuong.com",
  },
  {
    social: "email",
    link: "ethanator360@yahoo.com",
    href: "mailto:ethanator360@yahoo.com",
  },
  {
    social: "github",
    link: "etuong",
    href: "https://github.com/etuong",
  },
  {
    social: "linkedin",
    link: "ethan-uong",
    href: "https://www.linkedin.com/in/ethan-uong-4066407a/",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>

      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
