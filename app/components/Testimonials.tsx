"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

import client from "@/public/clients.png";
import client2 from "@/public/client2.jpg";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: client,
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: client2,
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: client,
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: client2,
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: client,
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: client2,
  },
];

export const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center justify-center w-full relative"
    >
      <div className="w-full mx-auto flex flex-col justify-center items-center pt-10 pb-20 duration-500">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-transparent bg-gradient-to-r from-onms-primary-lt via-onms-accent to-onms-primary-lt bg-clip-text w-fit font-milkbold">
            Testimonials
          </h2>
          <p className="text-md md:text-[18px] leading-[30px] text-white text-center">
            Kind words from satisfied clients
          </p>
        </div>
        <div className="w-full relative md:mt-6 transition-all duration-500">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            modules={[FreeMode, Autoplay]}
            className="rounded-lg"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <div className="">
              {testimonials.map((tes, i) => (
                <SwiperSlide
                  key={i}
                  className="p-10 md:p-6"
                >
                  <p className="text-md leading-[30px] text-white">
                    {tes.quote}
                  </p>

                  <div className="flex gap-3 mt-6">
                    <Image
                      src={tes.img}
                      alt={tes.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover w-[50px] h-[50px] border border-onimisea_accent"
                    />

                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-lg">{tes.name}</h4>
                      <p>{tes.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="absolute bottom-0 left-0 pointer-events-none bg-gradient-to-r from-black-100 to-transparent z-75 h-full w-[15%] md:w-[25%]" />
          <div className="absolute bottom-0 right-0 pointer-events-none bg-gradient-to-l from-black-100 to-transparent z-75 h-full w-[15%] md:w-[25%]" />
        </div>
      </div>
    </div>
  );
};
