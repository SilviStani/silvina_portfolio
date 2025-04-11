import React from 'react';
import styles from "../../Styles/Intro.module.css";
import Link from 'next/link';
import { data } from '../Header/data';
import Image from 'next/image';


const Social = () => {
  return (
    <div className={styles.SocialContainer}>
    {data.map((item) => (
        <Link className={styles.Large_intro_img} href={item.src} target={item.target}>
            <Image
            src={item.src}
            alt={item.alt}
            height={50}
            width={50}
            className={styles.img_muppet}
            />
        </Link>
    ))}
    </div>
  )
}

export default Social