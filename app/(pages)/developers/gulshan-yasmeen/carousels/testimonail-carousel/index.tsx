"use client";

import Carroussel from "./Carroussel";
import "./style.css";

export default function GulshanYasmeenTestimonailCarousel({ cards }: any) {
  return (
    <Carroussel
      cards={cards}
      height="h-full"
      width="80%"
      margin="auto auto"
      offset={2}
      showArrows={false}
    />
  );
}
