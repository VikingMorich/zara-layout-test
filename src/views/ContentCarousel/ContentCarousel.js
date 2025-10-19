import { Swiper, SwiperSlide } from 'swiper/react';
import SlideCarousel from '../../components/SlideCarousel/SlideCarousel';
import 'swiper/css';

export default function ContentCarousel () {
  return (
    <div className='content-carousel'>
        <Swiper
        spaceBetween={7}
        breakpoints={{
          480: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.8 },
          1024: { slidesPerView: 2.3 },
        }}
        >
            <SwiperSlide><SlideCarousel img="/slider2/6babb4cbd05c0419ba5fbf49c4aba406304cacee.jpg"/></SwiperSlide>
            <SwiperSlide><SlideCarousel img="/slider2/f312876efecb0f584847fd41ba20687ffa39feff.jpg"/></SwiperSlide>
            <SwiperSlide><SlideCarousel img="/slider2/91e6a7f6698014baec041730f583d7b65e48f83e.jpg"/></SwiperSlide>
            <SwiperSlide><SlideCarousel img="/slider2/7bbc4e71cfd5546adf98cc5a326608e83d3cb621.jpg"/></SwiperSlide>
            <SwiperSlide><SlideCarousel img="/slider2/c94af588caec73a523431f18c2de58378b8c0552.jpg"/></SwiperSlide>
        </Swiper>
        <p className='content-carousel__description'>
            When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within the collection, the approach for the third editon has evolved naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials.<br/><br/>When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within the collection, the approach for the third editon has evolved naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials.When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within.
        </p>
    </div>
  );
};