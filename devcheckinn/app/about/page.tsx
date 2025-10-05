// // app/about/page.tsx
// 'use client';

// import React, { useEffect } from "react";
// import Header from "app/components/Header";
// import { useIntersection } from "../hooks/useIntersection"; // ✅ our reusable hook
// import Counter from "../components/Counter";
// import TeamCard from "app/components/TeamCard";
// import styles from "./about.module.css";

// const AboutPage: React.FC = () => {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


//   // ✅ Correctly typed intersection hooks
//   const { ref: headerRef, isVisible: headerVisible } = useIntersection<HTMLHeadingElement>();
//   const { ref: aboutBoxRef, isVisible: aboutBoxVisible } = useIntersection<HTMLDivElement>();
//   const { ref: recordRef, isVisible: recordVisible } = useIntersection<HTMLDivElement>();

//   // ✅ Scramble text animation
//   useEffect(() => {
//     const animateText = (element: HTMLElement | null) => {
//       if (!element) return;
//       let iteration = 0;
//       const interval = setInterval(() => {
//         element.innerText = element.dataset.value
//           ?.split("")
//           .map((letter, index) => {
//             if (index < iteration) {
//               return element.dataset.value![index];
//             }
//             return letters[Math.floor(Math.random() * 26)];
//           })
//           .join("") || "";

//         if (iteration >= element.dataset.value!.length) {
//           clearInterval(interval);
//         }

//         iteration += 1 / 3;
//       }, 30);
//     };

//     animateText(document.querySelector(".animated-text") as HTMLElement);
//     animateText(document.querySelector(".animated-block") as HTMLElement);
//     animateText(document.querySelector(".animated-block2") as HTMLElement);
//     animateText(document.querySelector(".animated-block3") as HTMLElement);
//     animateText(document.querySelector(".animated-block4") as HTMLElement);
//     animateText(document.querySelector(".animated-block5") as HTMLElement);
//     animateText(document.querySelector(".animated-block6") as HTMLElement);
//   }, []);

//   return (
//     <div className={styles.contentBox}>
//       <Header />
//       {/* Who We Are */}

//       <h3
//         ref={headerRef}
//         className={`${styles.aboutHeader} ${headerVisible ? styles.slideIn : ""}`}
//       >

//         <span className="animated-text" data-value="Who We Are"></span>

//       </h3>

//       <div className={styles.aboutTextBox}>

//         <div
//           ref={aboutBoxRef}
//           className={`${styles.aboutBoxWrapper} ${aboutBoxVisible ? styles.fadeSlideUp : ""}`}
//           >
//           <div className={`${styles.aboutImage} ${aboutBoxVisible ? styles.dropIn : ""}`}></div>
//           <div className={`${styles.aboutText} ${aboutBoxVisible ? styles.fadeSlideUp : ""}`}></div>

//         </div>

//         <button
//           className={`${styles.backStory} ${aboutBoxVisible ? styles.fadeSlideUp : ""}`}
//         >

//         </button>

//       </div>

//       {/* Our Track Record */}

//       <h3
//         className={`${styles.aboutHeader1} ${recordVisible ? styles.slideIn : ""}`}
//       >
//         <span className="animated-block" data-value="Our Track Record"></span>

//       </h3>

//       <div
//         ref={recordRef}
//         className={`${styles.trackRecordWrapperBox} ${recordVisible ? styles.fadeSlideUp : ""}`}
//       >
//         <div className={styles.record1}>

//           <h3
//             className={`animated-block2 ${styles.recordText}`}
//             data-value="Deliveries Made"
//           ></h3>

//           <span className={styles.animatedLine}></span>

//           <Counter end={500} /> {/* ✅ example number */}

//         </div>

//         <div className={styles.record2}>

//           <h3
//             className={`animated-block3 ${styles.recordText}`}
//             data-value="Clients Reached"
//           ></h3>

//           <span className={styles.animatedLine}></span>

//           <Counter end={500} />

//         </div>

//         <div className={styles.record3}>

//           <h3
//             className={`animated-block4 ${styles.recordText}`}
//             data-value="Cities Served"
//           ></h3>

//           <span className={styles.animatedLine}></span>

//           <Counter end={100} />

//         </div>

//         <div className={styles.record4}>

//           <h3
//             className={`animated-block5 ${styles.recordText}`}
//             data-value="Hearts Touched❤️"
//           ></h3>

//           <span className={styles.animatedLine}></span>

//           <Counter end={1000} />

//         </div>
//       </div>

//             <h3
//         ref={headerRef}
//         className={`${styles.aboutHeader1} ${headerVisible ? styles.slideIn : ""}`}
//       >

//         <span className="animated-block6" data-value="Meet The Team"></span>

//       </h3>

//       <div className={styles.teamWrapper}>

//         <div className={styles.founderCard}>
//           <TeamCard
//             img="/img/avatar-2.png"
//             name="Okon U. Effiong"
//             role="(Founder)"
//             lifeQuote="1% Better Everyday"
//           />

//         </div>
//         <div className={styles.managersCard}>

//           <TeamCard
//             img="/img/avatar-2.png"
//             name=" O. N. Abraham"
//             role="(Branch Manager)"
//             lifeQuote="1% Better Everyday"
//           />

//           <TeamCard
//             img="/img/avatar-2.png"
//             name="E. Innocent"
//             role="(Operations Manager)"
//             lifeQuote="1% Better Everyday"
//           />

//           <TeamCard
//             img="/img/avatar-1.png"
//             name="A. Solson"
//             role="(Admin Manager)"
//             lifeQuote="1% Better Everyday"
//           />

//           <TeamCard
//             img="/img/avatar-3.png"
//             name="D. Jikson"
//             role="(Finance Manager)"
//             lifeQuote="1% Better Everyday"
//           />

//             <TeamCard
//             img="/img/avatar-1.png"
//             name="M. Halim"
//             role="(Cust. Service Manager)"
//             lifeQuote="1% Better Everyday"
//           />

//           <TeamCard
//             img="/img/avatar-3.png"
//             name="R. William"
//             role="(Cust. Support Manager)"
//             lifeQuote="1% Better Everyday"
//           />

//           <TeamCard
//             img="/img/avatar-2.png"
//             name="O. Joshua"
//             role="(Cust. Support Manager)"
//             lifeQuote="1% Better Everyday"
//           />

//           <TeamCard
//             img="/img/avatar-4.png"
//             name="OMMICANG"
//             role="(wildCard)"
//             lifeQuote="1% Better Everyday"
//           />

          
//         </div>
//         <div className={styles.employeesCard}>

//         </div>
//       </div>

//             <div
//         className={styles.footerCopyrightBox}
//       >
//         &copy; {new Date().getFullYear()} YourTimeDeivery. All rights reserved.
//       </div>

//     </div>
//   );
// };

// export default AboutPage;









// //===================================================================================================
// //===================================================================================


// // // app/about/page.tsx
// // 'use client';

// // import React, { useEffect, useState, useRef } from "react";
// // import Header from 'app/components/Header';
// // import styles from './about.module.css';


// // const AboutPage: React.FC = () => {
// //   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //   const [visible, setVisible] = useState(false);
// //   const aboutRef = useRef<HTMLDivElement>(null);


// //    useEffect(() => {
// //         const animateText = (element: HTMLElement | null) => {
// //             if (!element) return;
// //             let iteration = 0;
// //             const interval = setInterval(() => {
// //                 element.innerText = element.dataset.value
// //                     ?.split("")
// //                     .map((letter, index) => {
// //                         if (index < iteration) {
// //                             return element.dataset.value![index];
// //                         }
// //                         return letters[Math.floor(Math.random() * 26)];
// //                     })
// //                     .join("") || "";

// //                 if (iteration >= element.dataset.value!.length) {
// //                     clearInterval(interval);
// //                 }

// //                 iteration += 1 / 3;
// //             }, 30);
// //         };

// //         const h1Element = document.querySelector(".animated-text") as HTMLElement;
// //         const blockElement = document.querySelector(".animated-block") as HTMLElement;
// //         const h3Element = document.querySelector(".animated-block2") as HTMLElement;
// //         const h3Element1 = document.querySelector(".animated-block3") as HTMLElement;
// //         const h3Element2 = document.querySelector(".animated-block4") as HTMLElement;
// //         const h3Element3 = document.querySelector(".animated-block5") as HTMLElement;

// //         animateText(h1Element);
// //         animateText(blockElement);
// //         animateText(h3Element);
// //         animateText(h3Element1);
// //         animateText(h3Element2);
// //         animateText(h3Element3);


// //         return () => {
// //             clearInterval(animateText as unknown as number); // This line clears the interval
// //         };
// //     }, []);

// //         useEffect(() => {
// //       const observer = new IntersectionObserver(
// //         ([entry]) => setVisible(entry.isIntersecting),
// //         { threshold: 0.2 }
// //       );
  
// //       if (aboutRef.current) observer.observe(aboutRef.current);
  
// //       return () => {
// //         if (aboutRef.current) observer.unobserve(aboutRef.current);
// //       };
// //     }, []);


// //   return (
// //     <div className={styles.contentBox} ref={aboutRef}>

// //         <Header/>

// //       <h3 className={`${styles.aboutHeader} ${
// //           visible ? styles.slideIn : ''
// //         }`}
      
// //     > 
      
// //       <span className="animated-text" data-value="Who We Are"></span></h3>

// //         <div className={styles.aboutTextBox}>

// //             <div className={styles.aboutBoxWrapper}>

// //                 <div className={`${styles.aboutImage} ${
// //                     visible ? styles.dropIn : ''
// //                     }`}>

// //                 </div>

// //                 <div className={`${styles.aboutText} ${
// //                     visible ? styles.fadeSlideUp : ''
// //                     }`}>

// //                 </div>

// //             </div>

// //             <button className={`${styles.backStory} ${
// //                     visible ? styles.fadeSlideUp : ''
// //                     }`}></button>

// //         </div>

// //       <h3 className={`${styles.aboutHeader1} ${
// //           visible ? styles.slideIn : ''
// //         }`}
      
// //     > 
      
// //       <span className="animated-block" data-value="Our Track Record"></span></h3>

// //       <div className={`${styles.trackRecordWrapperBox} ${
// //                     visible ? styles.fadeSlideUp : ''
// //                     }`}
      
// //         >

// //         <div className={styles.record1}>
                
// //           <h3 className={`animated-block2 ${styles.recordText}`} data-value="Deliveries Made"> Deliveries Made</h3>
// //           <span className={styles.animatedLine}></span>
           
// //         </div>

// //         <div className={styles.record2}>

// //           <h3 className={`animated-block3 ${styles.recordText}`} data-value="Clients Reached"> </h3>
// //           <span className={styles.animatedLine}></span>

// //         </div>
        
// //         <div className={styles.record3}>

// //           <h3 className={`animated-block4 ${styles.recordText}`} data-value="Cities Served"> </h3>
// //           <span className={styles.animatedLine}></span>

// //         </div>

// //         <div className={styles.record4}>

// //           <h3 className={`animated-block5 ${styles.recordText}`} data-value="Hearts Touched❤️"> </h3>
// //           <span className={styles.animatedLine}></span>

// //         </div>

// //       </div>





// //     </div>
// //   );
// // };

// // export default AboutPage;
