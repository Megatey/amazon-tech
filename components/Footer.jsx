import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>2022 DevRollins Headphones All rights reserverd</p>
      <p className={styles.icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer