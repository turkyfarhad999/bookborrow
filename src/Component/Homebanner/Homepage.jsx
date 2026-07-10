'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Marku from '../marcu/Marku';

const slides = [
  { id: 1, image: '/book4.jpg', title: 'Slide One' },
  { id: 2, image: '/book5.jpg', title: 'Slide Two' },
  { id: 3, image: '/book3.jpg', title: 'Slide Three' },
];

export default function Homepage() {
  return (
  <div>
      <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      className="w-full h-[calc(100vh-73px)] rounded-box"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-[calc(100vh-73px)]">
            <Image
              src={slide.image}
              fill
              alt={slide.title}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
  <div className="flex flex-col items-center gap-4 text-white">
    <h2 className="text-9xl font-bold text-center">
      Find Your Next Read
    </h2>
    <Link href="/books" className="btn text-2xl px-7 py-8 rounded-3xl">
      Browse Now
    </Link>
  </div>
</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <Marku></Marku>
    
  </div>
  );
}