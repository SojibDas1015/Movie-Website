import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper modules
import { Pagination, Autoplay } from "swiper/modules";

// src/assets থেকে images import
import img1 from '../assets/banner.jpg';
import img2 from '../assets/banner2.jpg';
import img3 from '../assets/movie.jpg';
import img4 from '../assets/squad.webp';
import img5 from '../assets/Wednesday.webp';

// Image array
const images = [img1, img2, img3, img4, img5];

export default function ImageSlider() {
  return (
    <div className="w-full">
      <Swiper
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 3000, // 3s auto slide
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full "
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
