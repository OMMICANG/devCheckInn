'use client';

import styles from '../styles/Footer.module.css';


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerInfoBox}>
            <div className={styles.paymentBox}></div>
            <div className={styles.getNotif}></div>
            <div className={styles.explore}></div>
            <span className={styles.socials}></span>
        </div>

      <div className={styles.footerCopyrightBox}>&copy; {new Date().getFullYear()} Check-Inn Hotels. All rights reserved.</div>
    </footer>
  );
}
