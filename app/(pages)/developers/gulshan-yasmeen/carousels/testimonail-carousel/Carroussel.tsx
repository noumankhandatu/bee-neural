"use client";

import { useState, useEffect } from "react";
import { config } from "react-spring";
import dynamic from "next/dynamic";

// Import the type of the Carousel component
import type CarouselType from "react-spring-3d-carousel";

// Use dynamic import with type assertion
const Carousel = dynamic(
  () =>
    import("react-spring-3d-carousel") as Promise<typeof CarouselType | any>,
  {
    ssr: false,
  }
);

interface CardProps {
  cards: any[] | any;
  offset: number;
  showArrows: boolean;
  width: string | number;
  height: string | number;
  margin: string | number;
}

export default function Carroussel(props: CardProps) {
  const table = props.cards.map((element: any, index: number) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState<number>(2);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [goToSlide, setGoToSlide] = useState<number | null>(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}