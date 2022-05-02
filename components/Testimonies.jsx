import React, {useRef, useEffect, useState} from 'react'
import styles from './Testimonies.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import AOS from "aos";
import "aos/dist/aos.css";


const Testimonies = () => {

        useEffect(() => {
          AOS.init({ duration: 800 });
        }, []);
      

  return (
    <section className={styles.overall}>
        <div className={styles.header}>
            <p>Recent Testimonies</p>
        </div>
        <main className={styles.mainView}>
            <section className={styles.card}  data-aos="fade-right">
                <div className={styles.imageDiv}>
                    <Image src="/real2.jpg" alt="" layout='fill' />
                </div>
                <div className={styles.username}>
                    Collins Rollins
                </div>
                <div className={styles.texts}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eum rerum accusamus iure velit voluptatum ducimus! Doloribus exercitationem repudiandae ea.
                </div>
                <div className={styles.stars}>
                    <AiFillStar fill='#1f2dc2' />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiOutlineStar  fill='#1f2dc2'  />
                </div>
            </section>
            <section className={styles.card}  data-aos="fade-right">
                <div className={styles.imageDiv}>
                    <Image src="/real2.jpg" alt="" layout='fill' />
                </div>
                <div className={styles.username}>
                    Collins Rollins
                </div>
                <div className={styles.texts}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eum rerum accusamus iure velit voluptatum ducimus! Doloribus exercitationem repudiandae ea.
                </div>
                <div className={styles.stars}>
                    <AiFillStar fill='#1f2dc2' />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiOutlineStar  fill='#1f2dc2'  />
                </div>
            </section>

            <section className={styles.card}  data-aos="fade-right">
                <div className={styles.imageDiv}>
                    <Image src="/real2.jpg" alt="" layout='fill' />
                </div>
                <div className={styles.username}>
                    Collins Rollins
                </div>
                <div className={styles.texts}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, eum rerum accusamus iure velit voluptatum ducimus! Doloribus exercitationem repudiandae ea.
                </div>
                <div className={styles.stars}>
                    <AiFillStar fill='#1f2dc2' />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiOutlineStar  fill='#1f2dc2'  />
                </div>
            </section>
        </main> 

    </section>
  )
}

export default Testimonies