// app/rooms/page.tsx
"use client";

import React from "react";
import Header from "@/app/components/Header";
import RoomCard from "@/app/components/RoomCard";
import styles from "./Rooms.module.css";

export default function RoomsPage() {
  // Dummy data for preview
  const singleRooms = [
    {
      number: "15",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",

      },
      price: 20000,
    },
    {
      number: "26",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: {
        Fan: "✅",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 20000,
    },

  ];

  const standardRooms = [
    {
      number: "11",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 23000,
    },
    {
      number: "13",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 23000,
    },
    {
      number: "17",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 23000,
    },

        {
      number: "21",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 23000,
    },

        {
      number: "25",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 23000,
    },
  ];

  const superStandardRooms = [
    {
      number: "10",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 25000,
    },
    {
      number: "16",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "✅",
        TV: "✅",
      },
      price: 25000,
    },
    {
      number: "18",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 25000,
    },

        {
      number: "20",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 25000,
    },

        {
      number: "23",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "❌",
        TV: "✅",
      },
      price: 25000,
    },
  ];

  const deluxeRooms = [
    {
      number: "12",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "✅",
        TV: "✅",
      },
      price: 30000,
    },
    {
      number: "14",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "✅",
        TV: "✅",
      },
      price: 30000,
    },
    {
      number: "19",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "✅",
        TV: "✅",
      },
      price: 30000,
    },

        {
      number: "22",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "✅",
        TV: "✅",
      },
      price: 30000,
    },

        {
      number: "24",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "❌",
        AC: "✅",
        "Heater": "✅",
        TV: "✅",
      },
      price: 30000,
    },

            {
      number: "27",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: {
        Fan: "✅",
        AC: "✅",
        "Heater": "✅",
        TV: "✅",
      },
      price: 30000,
    },
  ];


  return (

    <div className={styles.contentBox}>
      <Header />

      <h2 className={styles.testimonialTitle}>
            Single Rooms
      </h2>

     <div className={styles.roomsContainer}>

        {singleRooms.map((room, idx) => (
          <RoomCard
            key={idx}
            number={room.number}
            images={room.images}
            features={room.features}
            price={room.price}
          />
        ))}
      </div>

      <h2 className={styles.testimonialTitle2}>
            Standard Rooms
      </h2>

      <div className={styles.roomsContainer}>

        {standardRooms.map((room, idx) => (
          <RoomCard
            key={idx}
            number={room.number}
            images={room.images}
            features={room.features}
            price={room.price}

          />
        ))}
      </div>

      <h2 className={styles.testimonialTitle2}>
            Super Standard Rooms
      </h2>

      <div className={styles.roomsContainer}>

        {superStandardRooms.map((room, idx) => (
          <RoomCard
            key={idx}
            number={room.number}
            images={room.images}
            features={room.features}
            price={room.price}

          />
        ))}
      </div>

      <h2 className={styles.testimonialTitle2}>
            Deluxe Rooms
      </h2>

      <div className={styles.roomsContainer}>

        {deluxeRooms.map((room, idx) => (
          <RoomCard
            key={idx}
            number={room.number}
            images={room.images}
            features={room.features}
            price={room.price}

          />
        ))}
      </div>

    </div>
  );
}


