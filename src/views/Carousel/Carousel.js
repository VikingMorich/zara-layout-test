import { Swiper, SwiperSlide } from 'swiper/react';
import SlideCarousel from '../../components/SlideCarousel/SlideCarousel';
import 'swiper/css';

export default function Carousel () {
  return (
    <div className='carousel'>
      <Swiper
        spaceBetween={7}
        breakpoints={{
          480: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.8 },
          1024: { slidesPerView: 2.3 },
        }}
      >
        <SwiperSlide><SlideCarousel img="/slider1/1e92b31318d0b4a630419661957053d35cf9e691.jpg"/></SwiperSlide>
        <SwiperSlide><SlideCarousel img="/slider1/8866e727252e17b76756bb437be153beb9bd5958.jpg"/></SwiperSlide>
        <SwiperSlide><SlideCarousel img="/slider1/37219c01c34151f7a764c7b4a534330723d65b9f.jpg"/></SwiperSlide>
        <SwiperSlide><SlideCarousel img="/slider1/64e70f67f821954efc990a1bd460bbcf789814f9.jpg"/></SwiperSlide>
        <SwiperSlide><SlideCarousel img="/slider1/10f397ed0405fbc227b6ff7b962f9189dde9d881.jpg"/></SwiperSlide>
      </Swiper>
    </div>
  );
};