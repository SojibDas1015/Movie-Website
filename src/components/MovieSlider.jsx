// MovieSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

// Modules
import { Navigation, Autoplay } from "swiper/modules";

export default function MovieSlider({ movies }) {
  return (
    <div className="w-full my-6 mt-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
