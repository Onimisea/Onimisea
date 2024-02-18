"use client";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import stack1 from "@/public/imgs/stack/react.svg";
import stack2 from "@/public/imgs/stack/next.svg";
import stack3 from "@/public/imgs/stack/redux.svg";

import left_quote_light from "@/public/imgs/left_quote_light.svg";
import left_quote_dark from "@/public/imgs/left_quote_dark.svg";
import { useTheme } from "next-themes";

const reviews = [
  { client: stack1, review: "He is very agile" },
  { client: stack2, review: "He is very dedicated" },
  { client: stack3, review: "He has great tenacity" },
];

const ReviewsSlider = () => {
  const { theme } = useTheme();

  return (
    <section className="w-full flex items-center justify-center bg-transparent dark:bg-onimisea_bg_dark py-12">
      <section className="w-[80%] sm:w-[85%] md:w-[90%] mx-auto max-w-screen-2xl flex flex-col items-center justify-center text-md gap-20">
        <span className="w-full">
          <Image
            src={theme === "light" ? left_quote_light : left_quote_dark}
            alt=""
            width={80}
            height={80}
            className="rounded-[10px] w-[80px] h-[80px] object-contain select-none"
          />
        </span>
        <section className="w-full flex items-center justify-center text-md gap-24">
          <Swiper
            breakpoints={{
              1440: {
                slidesPerView: 2,
              },
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            modules={[FreeMode, Autoplay, Pagination]}
            className="rounded-[10px]"
          >
            {reviews.map((review, i) => {
              return (
                <SwiperSlide key={i} className="transition-all duration-500">
                  <section className="rounded-[10px] flex flex-col items-center justify-center gap-4 text-center">
                    <section className="rounded-[10px] bg-white dark:text-onimisea_text_light flex items-center justify-center gap-10 p-8">
                      <Image
                        src={review.client}
                        alt={review.review}
                        width={100}
                        height={100}
                        className="rounded-[10px] w-[100px] h-[100px] object-contain"
                      />

                      <p className="text-left select-none">
                        {review.review} Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Necessitatibus, sapiente voluptates
                        veniam at nam quisquam alias ab, error eligendi porro,
                        fugit similique eaque impedit dicta. Itaque quia
                        assumenda neque obcaecati.
                      </p>
                    </section>
                  </section>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

        <span className="w-full flex justify-end"><Image
            src={theme === "light" ? left_quote_light : left_quote_dark}
            alt=""
            width={80}
            height={80}
            className="rounded-[10px] w-[80px] h-[80px] object-contain select-none rotate-180"
          /></span>
      </section>
    </section>
  );
};
export default ReviewsSlider;
