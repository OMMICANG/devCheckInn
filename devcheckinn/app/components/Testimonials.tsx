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
    name: 'Okoye Peter',
    rating: 4,
    role: '(Guest)',
    text: `Nice place , nice location,
    beautiful customer service though room is not so spacious
    but quite comfy`,
  },
  {
    img: '/img/avatar-2.png',
    name: 'Israel Olofa',
    role: '(Guest)',
    rating: 4,
    text: `Their AC in the rooms can send you Antarctica 😅.
    Courteous staff. Neat rooms.
    Prices from N23,000 up`,
  },
  {
    img: '/img/avatar-3.png',
    name: 'Anuoluwapo',
    role: '(Guest)',
    rating: 4,
    text: `Their food is very nice but a bit on the high side.
    Excellent Service. I Enjoyed Their Service.`,
  },
  {
    img: '/img/avatar-4.png',
    name: 'OMMICANG',
    role: '(Business Owner)',
    rating: 5,
    text: `They've Made Some Real Positive Improvements 
    From Last Time I Visited.
    Their Service Now Is Topnotch.`,
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
