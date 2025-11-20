// app/about/page.tsx
'use client';

import React, { useEffect } from "react";
import Header from "@/app/components/Header";
import Counter from "../components/Counter";
import Image from 'next/image';
import Link from 'next/link';
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
    animateText(document.querySelector(".mission-statement") as HTMLElement);
    animateText(document.querySelector(".vision-statement") as HTMLElement);
    animateText(document.querySelector(".culture-statement") as HTMLElement);
    animateText(document.querySelector(".ethics-statement") as HTMLElement);



  }, []);

  return (
      <div className={styles.contentBox}>
        <Header />
        {/* Who We Are */}

        <h3 className={styles.aboutHeader}>
          <span className="animated-text" data-value="Who We Are"></span>
        </h3>

        <div className={styles.aboutUsBox}>
          <div className={styles.imageBox}>
              <Image priority={true} 
                src="/backgrounds/4.jpg" 
                alt="Check Inn Logo"
                fill
                sizes="(max-width: 35vw) 35vw, 35vw"
                style={{ objectFit: 'cover' }} 
                quality={100}
                className={styles.aboutImage}
                
                />
          </div>

          <div className={styles.infoBox}>
            Check-Inn 24/7 Hotels, Restaurant &  
            Lounge is a premium lifestyle hospitality  
            brand located in the heart of Ojodu-Berger,  
            Lagos. Designed for comfort, convenience  
            and class, we provide round-the-clock  
            services that cater to today’s modern  
            traveler, business executive, and leisure  
            guest. 
            Our brand was built on a simple belief — 
            that hospitality should be seamless,  
            accessible, and dependable at any hour.  
            Whether you're checking in late at night,  
            enjoying a freshly prepared meal, or  
            unwinding with friends in our lounge, we  
            ensure a consistently warm and refined  
            experience. 
            At Check-Inn 24/7, we combine elegance  
            with efficiency. Our hotel offers well- 
            appointed rooms, high-speed internet,  
            responsive customer service and a secure  
            environment. Our restaurant serves a  
            diverse selection of local and continental  
            dishes crafted by experienced chefs, while  
            our lounge provides a relaxed yet vibrant  
            atmosphere with premium drinks, music,  
            and exceptional service. 
            We are committed to hospitality  
            excellence, operational integrity, and the  
            comfort of every guest who walks through  
            our doors. Through continuous  
            improvement, staff training, and  
            adherence to global hospitality standards,  
            Check-Inn 24/7 stands as a trusted  
            destination for rest, dining and  
            entertainment. 
            Welcome to a place where comfort meets convenience.          </div>
        </div>

        <div className={styles.aboutTextBox}>
          <div className={styles.aboutBoxWrapper}>
            <div className={styles.mission}>

              <div>

              <h3
                className={`mission-statement ${styles.recordTextMission}`}
                data-value="MISSION STATEMENT"
              ></h3>

            <span className={styles.animatedLineMission}></span>

              </div>

              <div className={styles.statementBody}>

              <p className={styles.statementBody}>
                Our mission is to deliver modern, reliable hospitality through 
                clean comfort, warm service, and a committed team 
                dedicated to safety, integrity, and excellence—ensuring 
                every guest feels valued and every staff member proud.
              </p>
              </div>
            </div>
            <div className={styles.vision}>

              <div>

                <h3
                  className={`vision-statement ${styles.recordTextMission}`}
                  data-value="VISION STATEMENT"
                ></h3>

                <span className={styles.animatedLineMission}></span>

              </div>

              <div className={styles.statementBody}>

              <p className={styles.statementBody}>
                To become the most trusted and preferred 24/7 hospitality 
                destination in Lagos.<br/>
                Check-Inn 24/7 offers comfort, safety, and exceptional guest 
                experiences at every hour of the day. 
              </p>
              </div>
            </div>
          </div>

          <button className={styles.coreValues}>
                <div className={styles.logoWrapper}>
                    <Link href={"/"}>
                    <Image priority={true} 
                    src="/logo/Logo_-_Copy-removebg-preview.png" 
                    alt="Check Inn Logo" width={75} height={75} 
                    className={styles.logo} />
                    </Link>
                </div>
          </button>

          <div className={styles.aboutBoxWrapper2}>
            <div className={styles.culture}>

              <div>

                <h3
                  className={`culture-statement ${styles.recordTextMission}`}
                  data-value= "CORE ETHICS"
                ></h3>

                <span className={styles.animatedLineMission}></span>

              <div className={styles.statementBodyEthics}>

                <ul>
                  <li>INTEGRITY</li>
                  <li>EXCELLENCE</li>
                  <li>PROFESSIONALISM</li>
                  <li>RESPECT</li>
                  <li>CLEANLINESS</li>
                </ul>
              </div>

              </div>
            </div>
            <div className={styles.ethics}>

                            <div>

                <h3
                  className={`ethics-statement ${styles.recordTextMission}`}
                  data-value= "CORE ETHICS"
                ></h3>

                <span className={styles.animatedLineMission}></span>

              <div className={styles.statementBodyEthics}>

                <ul>
                  <li>RELIABILITY</li>
                  <li>CUSTOMER-CENTRIC-SERVICE</li>
                  <li>TEAMWORK</li>
                  <li>INNOVATION</li>
                  <li>CONFIDENTIALITY</li>
                </ul>
              </div>

              </div>
            </div>
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
