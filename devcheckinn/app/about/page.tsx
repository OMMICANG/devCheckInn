// app/about/page.tsx
'use client';

import React, { useEffect } from "react";
import Header from "@/app/components/Header";
import Counter from "../components/Counter";
import styles from "./about.module.css";

const AboutPage: React.FC = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


  // ✅ Scramble text animation
  useEffect(() => {
    const animateText = (element: HTMLElement | null) => {
      if (!element) return;
      let iteration = 0;
      const interval = setInterval(() => {
        element.innerText = element.dataset.value
          ?.split("")
          .map((letter, index) => {
            if (index < iteration) {
              return element.dataset.value![index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("") || "";

        if (iteration >= element.dataset.value!.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    animateText(document.querySelector(".animated-text") as HTMLElement);
    animateText(document.querySelector(".animated-block") as HTMLElement);
    animateText(document.querySelector(".animated-block2") as HTMLElement);
    animateText(document.querySelector(".animated-block3") as HTMLElement);
    animateText(document.querySelector(".animated-block4") as HTMLElement);
    animateText(document.querySelector(".animated-block5") as HTMLElement);
    animateText(document.querySelector(".animated-block6") as HTMLElement);
    animateText(document.querySelector(".animated-block7") as HTMLElement);

  }, []);

  return (
      <div className={styles.contentBox}>
        <Header />
        {/* Who We Are */}

        <h3 className={styles.aboutHeader}>
          <span className="animated-text" data-value="Who We Are"></span>
        </h3>

        <div className={styles.aboutTextBox}>
          <div className={styles.aboutBoxWrapper}>
            <div className={styles.mission}></div>
            <div className={styles.vision}></div>
          </div>

          <button className={styles.coreValues}></button>

          <div className={styles.aboutBoxWrapper2}>
            <div className={styles.culture}></div>
            <div className={styles.ethics}></div>
          </div>

        </div>

        {/* Our Track Record */}

        <h3 className={styles.aboutHeader1}>
          <span className="animated-block" data-value="Our Track Record"></span>
        </h3>

        <div className={styles.trackRecordWrapperBox}>
          <div className={styles.record1}>
            <h3
              className={`animated-block2 ${styles.recordText}`}
              data-value="CS Rating"
            ></h3>
            <span className={styles.animatedLine}></span>
            <Counter end={100} /> {/* ✅ example number */}
          </div>

          <div className={styles.record2}>
            <h3
              className={`animated-block3 ${styles.recordText}`}
              data-value="Cities Served"
            ></h3>
            <span className={styles.animatedLine}></span>
            <Counter end={100} />
          </div>

          <div className={styles.record3}>
            <h3
              className={`animated-block4 ${styles.recordText}`}
              data-value="Guest's Served"
            ></h3>
            <span className={styles.animatedLine}></span>
            <Counter end={10000} />
          </div>

          <div className={styles.record4}>
            <h3
              className={`animated-block5 ${styles.recordText}`}
              data-value="Hearts Touched❤️"
            ></h3>
            <span className={styles.animatedLine}></span>
            <Counter end={10000} />
          </div>
        </div>

        <h3 className={styles.aboutHeader1}>
          <span className="animated-block7" data-value="Careers"></span>
        </h3>

        <div className={styles.careersBox}>

          <div className={styles.headerBlock}> 
            Below Are Current Open Position(s) We Have At Check-Inn 247 Hotels:
          </div>

          <div className={styles.careers}>
            <ul>
              <li>Cook</li>
            </ul>
          </div>

          <a href="https://bit.ly/46D3Ho0" className={styles.apply}>Apply</a>

        </div>

        <div className={styles.footerCopyrightBox}>
          &copy; {new Date().getFullYear()} Check-Inn 247 Hotels. All rights reserved.
        </div>
      </div>
  );
};

export default AboutPage;
