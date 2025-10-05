// components/RoomCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// import { Camera } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/RoomCard.module.css";

interface RoomCardProps {
  number: string;
  images: string[];
  features: { [key: string]: string };
  price: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ number, images, features, price, }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.roomCard}>
      {/* Room Header */}
      <div className={styles.roomHeader}>
        <h2>Room {number}</h2>
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
                alt={`Room ${number} image ${idx + 1}`}
                width={400}
                height={400}
                className={styles.roomImage}
                onClick={() => setIsModalOpen(true)}

              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.cameraIcon}>
          {/* <Camera size={20} /> */}
        </div>
      </div>

      {/* Features Footer */}
      <div className={styles.features}>
        {Object.entries(features).map(([key, value]) => (
          <div key={key} className={styles.featureItem}>
            <span className={styles.featureName}>{key}:</span>
            <span className={styles.featureValue}>{value}</span>
          </div>
        ))}
      </div>
      <div className={styles.priceContainer}>

      <span className={styles.roomPrice}>{`₦ ${price}`}</span>

      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // prevent closing on inner click
          >
            <button className={styles.closeButton} 
              // onClick={() => setIsModalOpen(false)}
              onClick={(e) => e.stopPropagation()}
            >
              ✕
            </button>

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
                    alt={`Room ${number} image ${idx + 1}`}
                    width={800}
                    height={500}
                    className={styles.modalImage}
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

export default RoomCard;