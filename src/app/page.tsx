"use client";
import JobCard from "@/components/page-components/job-board/JobCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Col } from "@/components/ui/col";
import { Label } from "@/components/ui/label";
import { Alfa_Slab_One, Inter, Merriweather_Sans } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

export const inter = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Col className="justify-center items-center h-150">
        <Image
          className="animate-bounce"
          alt="icon-loading"
          width="200"
          height="200"
          src={"/images/philore_logo.png"}
        />
        <TypeAnimation
          sequence={[
            "Global Expertise",
            1000,
            "Tailored Solutions",
            1000,
            "End-to-End Support",
            1000,
            "Commitment to Excellence ",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          className={`${inter.className} italic text-amber-600 text-xl md:text-4xl mb-16`}
        />
        <Button
          className="cursor-pointer bg-amber-500 hover:bg-white border-amber-500 border-2 hover:border-amber-500 hover:text-amber-500 md:text-xl md:p-5"
          onClick={() => router.push("/job-board")}
        >
          Get Started
        </Button>
      </Col>
    </>
  );
}
