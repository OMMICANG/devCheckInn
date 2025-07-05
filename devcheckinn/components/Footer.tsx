'use client';

import React, { useEffect, useState } from 'react';
import styles from '../styles/Footer.module.css';
import confetti from 'canvas-confetti';



export default function Footer() {

      const [submitted, setSubmitted] = useState(false);

  return (
    <footer className={styles.footer}>
        <div className={styles.footerInfoBox}>
            <div className={styles.getNotif}>

                <div className={styles.subHeaderBox}>

                <h3 className={styles.subHeader}>get Notified</h3>
                <hr className={styles.hr}/>

                </div>

                <form id='email' className={styles.form} onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const input = form.elements.namedItem('email') as HTMLInputElement;
                    const email = input.value;

                    const res = await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                    });

                    const data = await res.json();

                    if (data.success) {
                        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                        setSubmitted(true);
                        form.reset();
                        } else {
                            alert(data.error || 'Oops! Something went wrong.');
                        }
                }}>
                    <input
                        type="email"
                        name='email'
                        placeholder="Enter your email"
                        className={styles.input}
                        required
                    />

                    <button type="submit" className={styles.button}>Notify Me</button>
                </form>

                    {submitted && (
                        <p className={styles.thankYou}>🎉 Yayy!!! You've Subscribed For Notifications. Thank You</p>
                    )}
            </div>

            <div className={styles.corporate}>

                <div className={styles.subHeaderBox}>
                    
                    <h3 className={styles.subHeader}>Corporate</h3>
                    <hr className={styles.hr}/>

                </div>

                <a href=""> Check-Inn Group</a>
                <a href=""> Team</a>
                <a href=""> Careers CIG</a>
                <a href=""> Development Opportunities</a>
            </div>
            <div className={styles.legals}>

                <div className={styles.subHeaderBox}>
                    
                    <h3 className={styles.subHeader}>Legals</h3>
                    <hr className={styles.hr}/>

                </div>

                <a href="">Privacy Center</a>
                <a href="">Legal Notice</a>
                <a href="">site usage agreement</a>
                <a href="">digital accessibility</a>
                <a href="">Cookie Policy</a>
                <a href="">Modern Day Slavery Statement</a>

            </div>
            <span className={styles.help}>

                <div className={styles.subHeaderBox}>
                    
                    <h3 className={styles.subHeader}>Help</h3>
                    <hr className={styles.hr}/>

                </div>
            </span>
        </div>

      <div className={styles.footerCopyrightBox}>&copy; {new Date().getFullYear()} Check-Inn Hotels. All rights reserved.</div>
    </footer>
  );
}
