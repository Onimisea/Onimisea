"use client";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import stack1 from "@/public/imgs/stack/react.svg";
import stack2 from "@/public/imgs/stack/next.svg";
import stack3 from "@/public/imgs/stack/redux.svg";
import stack4 from "@/public/imgs/stack/tailwindcss.svg";
import stack5 from "@/public/imgs/stack/nodejs.svg";
import stack6 from "@/public/imgs/stack/nestjs.svg";
import stack7 from "@/public/imgs/stack/python.svg";
import stack8 from "@/public/imgs/stack/django.svg";
import stack9 from "@/public/imgs/stack/drf.svg";
import stack10 from "@/public/imgs/stack/mongo.svg";
import stack11 from "@/public/imgs/stack/mysql.svg";
import stack12 from "@/public/imgs/stack/postgres.svg";
import stack13 from "@/public/imgs/stack/firebase.svg";
import stack14 from "@/public/imgs/stack/git.svg";
import stack15 from "@/public/imgs/stack/aws.svg";
import stack16 from "@/public/imgs/stack/azure.svg";

const stackImages = [
  stack1,
  stack2,
  stack3,
  stack4,
  stack5,
  stack6,
  stack7,
  stack8,
  stack9,
  stack10,
  stack11,
  stack12,
  stack13,
  stack14,
  stack15,
  stack16,
];

const TechstackSlider = () => {
  return (
    <section className="w-full flex items-center justify-center bg-transparent dark:bg-onimisea_bg_dark py-12">
      <section className="w-[80%] sm:w-[85%] md:w-[90%] mx-auto max-w-screen-2xl flex items-center justify-between text-md gap-24">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 4,
            },
            568: {
              slidesPerView: 5,
            },
            640: {
              slidesPerView: 6,
            },
            840: {
              slidesPerView: 8,
            },
            960: {
              slidesPerView: 10,
            },
            1440: {
              slidesPerView: 12,
            },
          }}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          modules={[FreeMode, Autoplay]}
          className="rounded-[10px]"
        >
          {stackImages.map((image, i) => {
            return (
              <SwiperSlide key={i} className="transition-all duration-500">
                <section className="rounded-[10px] flex flex-col items-center justify-center gap-4 text-center text-white">
                  <section className="rounded-[10px] bg-white flex items-center justify-center overflow-hidden p-4">
                    <Image
                      src={image}
                      alt={image}
                      width={80}
                      height={50}
                      className="rounded-[10px] w-[80px] h-[50px] object-contain"
                    />
                  </section>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </section>
  );
};
export default TechstackSlider;
