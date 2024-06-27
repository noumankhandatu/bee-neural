import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Imtiyaz Ali (CEO)",
    description:
      "Working with BeeNeural was an amazing experience. They were able to  deliver a custom AI solution that exceeded our expectations. We highly recommend their services.",
    link: "",
  },
  {
    title: "Shaapa (DIGIACOM) ",
    description:
      "AI Services Hub and BeeNeural helped us to develop a machine learning model that improved our sales forecasting accuracy. Their team was professional  and knowledgeable, and we would definitely work with them again.",
    link: "",
  },
  {
    title: "Aly (CTO)",
    description:
      "AI Services Hub and BeeNeural provided us with valuable insights into our customer   behavior using natural language processing. Their team was responsive and delivered  the project on time. We would highly recommend their services.",
    link: "",
  },
  {
    title: "Aleezy (FREELANCER)",
    description:
      "AI Services Hub and BeeNeural provided us with valuable insights into our customer  behavior using natural language processing. Their team was responsive and delivered  the project on time. We would highly recommend their services.",
    link: "https://meta.com",
  },
];
