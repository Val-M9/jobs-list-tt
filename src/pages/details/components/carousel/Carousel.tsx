import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselProps } from './types';
import 'swiper/css';
import './styles.css';

const Carousel: FC<CarouselProps> = ({ pictures }) => {
  return (
    <div className="swiper-container">
      <h1 className="heading bordered">Attached images</h1>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={8}
        breakpoints={{
          472: { slidesPerView: 2 },
          575: { slidesPerView: 2.5 },
          700: { slidesPerView: 3 },
          768: { slidesPerView: 1.8 },
          893: { slidesPerView: 2.3 },
          1117: { slidesPerView: 2.5 },
          1243: { slidesPerView: 3.3 },
        }}
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={`${picture}_${index}`}>
            <img src={picture} className="image" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Carousel };
