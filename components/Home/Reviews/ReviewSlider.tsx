"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect="cards" // Fixed effect syntax
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
        {reviewData.map((data) => (
          <SwiperSlide key={data.id} className="bg-white rounded-3xl block p-6 shadow-lg">
            <div className="w-[80%] mx-auto mt-8">
              {/* Review text */}
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                {data.review}
              </p>

              {/* Rating Icons */}
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                ))}
              </div>

              {/* User Profile */}
              <div className="mt-6 flex items-center space-x-4">
                <Image
                  src={data.image} 
                  width={60} 
                  height={60} 
                  alt={data.name} // Improved accessibility
                  className="rounded-full border border-gray-300"
                />
                <div>
                  <p className="text-sm sm:text-lg font-semibold">
                    {data.name}
                    </p>
                  <p className="text-gray-600 text-xs sm:text-base">
                    Web Developer
                    </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;

