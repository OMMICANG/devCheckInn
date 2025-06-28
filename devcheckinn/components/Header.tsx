'use client';

import Image from 'next/image';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import MenuIcon from './MenuIcon';  
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>
        <div className={styles.headerContainer}>

            <div className={styles.headerContent}>

                <div className={styles.logoWrapper}>
                    <Image priority={true} src="/logo/Logo_-_Copy-removebg-preview.png" alt="Check Inn Logo" width={20} height={20} className={styles.logo} />
                </div>

                <div className={styles.topContainer}>
                    <div className={styles.mobile}><BiSolidPhoneCall className={styles.callIcon} />+2348030555150</div>
                    <a href="https://tinyurl.com/vwdv3pft" target="_blank" rel="noopener noreferrer" className={styles.topLocator}><MdLocationPin className={styles.locationIcon}/>ojodu . Berger</a>
                </div>

                <button className={styles.button}>Book a room</button>
                <div className={styles.menuIcon}><MenuIcon /></div>

            </div>

            <div className={styles.topAnimatedLine}></div>
        </div>
        



    </header>
  );
}