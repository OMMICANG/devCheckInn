// app/rooms/page.tsx
"use client";

import React from "react";
import Header from "@/app/components/Header";
import Card from "@/app/components/Card";
import styles from "./restaurant.module.css";

export default function RoomsPage() {
  // Dummy data for preview
  const riceDish = [
    {
      item: "Jollof Rice",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Per Portion",

      price: 2000,
    },
    {
      item: "Fried Rice",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Per Portion",

      price: 2000,
    },

        {
      item: "White Rice",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Per Portion",

      price: 2000,
    },


  ];

  const localDish = [
    {
      item: "Eba",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Per Portion",

      price: 1200,
    },
    {
      item: "Semo",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Per Portion",

      price: 1200,
    },
    {
      item: "Poundo",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Per Portion",

      price: 1500,
    },

  ];

  const soups = [
    {
      item: "Egusi",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Per Portion",

      price: 1200,
    },
    {
      item: "Efo Riro",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Per Portion",

      price: 1200,
    },
    {
      item: "Ogbono",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Per Portion",

      price: 1200,
    },

        {
      item: "Edikang Ikong",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Per Portion",

      price: 1200,
    },
    
            {
      item: "Catfish P. Soup",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Per Portion",

      price: 5000,
    },

  ];

  const Protein = [
    {
      item: "Assorted Meat",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Per Portion",

      price: 4000,
    },
    {
      item: "Goat Meat",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Per Portion",
      price: 4000,
    },
    {
      item: "Chicken",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Per Portion",

      price: 4000,
    },

        {
      item: "Turkey",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Per Portion",

      price: 5000,
    },

        {
      item: "Croaker Fish",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Per Portion",

      price: 3500,
    },

  ];


  return (

    <div className={styles.contentBox}>
      <Header />

      <h2 className={styles.testimonialTitle}>
            Rice Dish
      </h2>

     <div className={styles.cardContainer}>

        {riceDish.map((card, idx) => (
          <Card
            key={idx}
            item={card.item}
            images={card.images}
            features={card.features}
            price={card.price}
          />
        ))}
      </div>

      <h2 className={styles.testimonialTitle2}>
            Local Dish
      </h2>

      <div className={styles.cardContainer}>

        {localDish.map((card, idx) => (
          <Card
            key={idx}
            item={card.item}
            images={card.images}
            features={card.features}
            price={card.price}

          />
        ))}
      </div>

      <h2 className={styles.testimonialTitle2}>
            Soups
      </h2>

      <div className={styles.cardContainer}>

        {soups.map((room, idx) => (
          <Card
            key={idx}
            item={room.item}
            images={room.images}
            features={room.features}
            price={room.price}

          />
        ))}
      </div>

      <h2 className={styles.testimonialTitle2}>
            Proteins
      </h2>

      <div className={styles.cardContainer}>

        {Protein.map((room, idx) => (
          <Card
            key={idx}
            item={room.item}
            images={room.images}
            features={room.features}
            price={room.price}

          />
        ))}
      </div>

    </div>
  );
}


