import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';

type CarouselProps = {
  pictures: string[];
};

const Carousel: FC<CarouselProps> = ({ pictures }) => {
  return (
    <div className="swiper-container">
      <h1 className="heading ">Attached images</h1>
      <Swiper slidesPerView={1.6} spaceBetween={7}>
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
