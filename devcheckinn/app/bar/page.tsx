// app/rooms/page.tsx
"use client";

import React from "react";
import Header from "@/app/components/Header";
import Card from "@/app/components/Card";
import styles from "./Bar.module.css";

export default function RoomsPage() {
  // Dummy data for preview
  const spirits = [
    {
      item: "Gordon's Gin",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Price Subject To Change",

      price: 3000,
    },

        {
      item: "Smirnoff Ice Sm",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Price Subject To Change",

      price: 1000,
    },

  ];

  const energyDrinks = [
    {
      item: "Monster",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Price Subject To Change",

      price: 3000,
    },
    {
      item: "Predator",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Price Subject To Change",

      price: 1000,
    },
    {
      item: "Fearless",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Price Subject To Change",

      price: 1000,
    },

  ];

  const softDrinks = [
    {
      item: "Coca-Cola",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Price Subject To Change",

      price: 700,
    },
    {
      item: "Malta Guinness",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Price Subject To Change",

      price: 1500,
    },

  ];

  const lagerBeer = [
    {
      item: "Guiness Stout Sm",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Price Subject To Change",

      price: 1800,
    },
    {
      item: "Goldberg",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Price Subject To Change",
      price: 1200,
    },
    {
      item: "Trophy",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Price Subject To Change",

      price: 1200,
    },

        {
      item: "Origin",
      images: [
        "https://picsum.photos/400/250?random=6",
        "https://picsum.photos/400/250?random=7",
        "https://picsum.photos/400/250?random=8",
      ],
      features: "*** Price Subject To Change",

      price: 1500,
    },

    ];

    const bitters = [
    {
      item: "Origin Bitters",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Price Subject To Change",

      price: 2000,
    },

  ];

    const yoghurts = [
    {
      item: "Hollandia Plain",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Price Subject To Change",

      price: 3000,
    },
    {
      item: "Hollandia Straw.",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Price Subject To Change",

      price: 3000,
    },

  ];

      const juice = [
    {
      item: "Chi Active",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Price Subject To Change",

      price: 2500,
    },
    {
      item: "Chi Exotic",
      images: [
        "https://picsum.photos/400/250?random=4",
        "https://picsum.photos/400/250?random=5",
      ],
      features: "*** Price Subject To Change",

      price: 2500,
    },

  ];

        const wines = [
    {
      item: "4th Street",
      images: [
        "https://picsum.photos/400/250?random=1",
        "https://picsum.photos/400/250?random=2",
        "https://picsum.photos/400/250?random=3",
      ],
      features: "*** Price Subject To Change",

      price: 12000,
    },

  ];


  return (

    <div className={styles.contentBox}>
      <Header />

      <h2 className={styles.testimonialTitle}>
            spirits
      </h2>

     <div className={styles.cardContainer}>

        {spirits.map((card, idx) => (
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
            Energy Drinks
      </h2>

      <div className={styles.cardContainer}>

        {energyDrinks.map((card, idx) => (
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
            soft Drinks
      </h2>

      <div className={styles.cardContainer}>

        {softDrinks.map((room, idx) => (
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
            lager Beers
      </h2>

      <div className={styles.cardContainer}>

        {lagerBeer.map((room, idx) => (
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
            Bitters
      </h2>

      <div className={styles.cardContainer}>

        {bitters.map((room, idx) => (
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
           Yoghurts
      </h2>

      <div className={styles.cardContainer}>

        {yoghurts.map((room, idx) => (
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
           Juice
      </h2>

      <div className={styles.cardContainer}>

        {juice.map((room, idx) => (
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
           Wines
      </h2>

      <div className={styles.cardContainer}>

        {wines.map((room, idx) => (
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


