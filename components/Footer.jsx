import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>2022 DevIbrahim Gadgets All rights reserverd</p>
      <p className={styles.icons}>
        <a
          href="https://twitter.com/megatey7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://github.com/Megatey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        {/* <AiFillFacebook /> */}
      </p>
    </div>
  );
};

export default Footer;
