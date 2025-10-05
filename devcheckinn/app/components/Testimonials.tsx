'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from '../styles/Testimonials.module.css';

const testimonials = [
  {
    img: '/img/avatar-1.png',
    name: 'Jane Wilcox',
    rating: 5,
    role: '(Doctor)',
    text: `As a pharmacy, timely medication deliveries are essential 
    for our patients. YourTime Delivery has never let us down.`,
  },
  {
    img: '/img/avatar-2.png',
    name: 'Jan Masters',
    role: '(Rtd Soldier)',
    rating: 5,
    text: `YourTime Delivery has been a lifesaver for our clinic! 
    Their prompt service and attention to detail ensure we always 
    receive critical medical supplies on time`,
  },
  {
    img: '/img/avatar-3.png',
    name: 'Dan Ellis',
    role: '(Pharmacist)',
    rating: 5,
    text: `I trust YourTime Delivery for all my business shipments. 
    Their professionalism and reliability give me peace of mind.`,
  },
  {
    img: '/img/avatar-4.png',
    name: 'OMMICANG',
    role: '(Business Owner)',
    rating: 5,
    text: `The company offers many easy-to-use services, 
    with hard work and round-the-clock support on all Deliveries.`,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonial}>
      <h2 className={styles.testimonialTitle}>
        WHAT CUSTOMERS SAY
      </h2>

      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        loop={true}
        slidesPerView={'auto'}
        centeredSlides={true}
        grabCursor={true}
        speed={600}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: -70,
          depth: 900,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className={styles.testimonialSwiper}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <article className={styles.testimonialCard}>
              <img src={t.img} alt={t.name} className={styles.testimonialImg} />
              <h3 className={styles.testimonialName}>{t.name}</h3>
              <h5 className={styles.testimonialRole}>{t.role}</h5>

              <div className={styles.testimonialRating}>
                <div className={styles.testimonialStars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
                <h3 className={styles.testimonialNumber}>{t.rating}.0</h3>
              </div>

              <p className={styles.testimonialDescription}>{t.text}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
