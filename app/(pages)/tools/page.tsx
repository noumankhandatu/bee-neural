import React, { lazy, Suspense } from "react";
import type { Metadata } from "next";
import Spinner from "@/app/components/atoms/Spinner";
import { BackgroundBoxesDemo } from "@/app/components/molecules/background-boxes";

const PlaceholdersAndVanishInputDemo = lazy(
  () => import("@/app/components/molecules/input")
);

export const metadata: Metadata = {
  title: "About Bee Neural | Bee Neural",
  description:
    "Our mission is to empower businesses and individuals to accelerate climate action.",
  openGraph: {
    type: "website",
    url: "https://bee-neural.vercel.app/tools",
    title: "About Bee Neural | Bee Neural",
    description:
      "Our mission is to empower businesses and individuals to accelerate climate action.",
    images: [
      {
        url: "https://bee-neural.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "Bee Neural Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bee Neural | Bee Neural",
    description:
      "Our mission is to empower businesses and individuals to accelerate climate action.",
    images: ["https://bee-neural.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://bee-neural.vercel.app/tools",
  },
  other: {
    "theme-color": "#dd5f00",
  },
};

const ToolsPage: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BackgroundBoxesDemo />
      {/* <div>
        <PlaceholdersAndVanishInputDemo />
      </div> */}
    </Suspense>
  );
};

export default ToolsPage;
