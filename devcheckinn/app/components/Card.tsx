// components/RoomCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaCamera } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/Card.module.css";

interface CardProps {
  item: string;
  images: string[];
  features:  string;
  price: number;
}

const Card: React.FC<CardProps> = ({ item, images, features, price, }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.parentCard}>
      {/* Room Header */}
      <div className={styles.cardHeader}>
        <h2>{item}</h2>
      </div>

      {/* Image Carousel */}
      <div
        className={styles.carouselWrapper}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          // navigation
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
          delay: 3000, // 3 seconds per slide
          disableOnInteraction: false, // keeps autoplay after swipe
          }}
          loop={true} // ✅ continuous loop
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt={`item ${item} image ${idx + 1}`}
                width={400}
                height={400}
                className={styles.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div 
          className={styles.cameraIcon}
          onClick={() => setIsModalOpen(true)}
          
          >
          <FaCamera />
        </div>
      </div>

      {/* Features Footer */}
      <div className={styles.features}>
          <span className={styles.featureItem}> {features}</span>
      </div>
      <div className={styles.priceContainer}>

      <span className={styles.price}>{`₦ ${price}`}</span>

      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div 
          className={styles.modalOverlay} 
          onClick={() => setIsModalOpen(false)}
        >

          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // prevent closing on inner click
          >
            {/* <button className={styles.closeButton} 
              onClick={() => setIsModalOpen(false)}
              onClick={(e) => e.stopPropagation()}
            >
              ✕
            </button> */}

            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={1}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    src={img}
                    alt={`item ${item} image ${idx + 1}`}
                    width={800}
                    height={500}
                    className={styles.modalImage}
                    onClick={(e) => e.stopPropagation()}
                    

                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

    </div>
  );
};

export default Card;