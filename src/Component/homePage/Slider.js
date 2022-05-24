import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Stock from './Stock';
import styles from './Slider.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider()  {
  return (
    <>
    <Swiper className={styles.slides}
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}     
    >
      
      <SwiperSlide className={styles.swiper}>
        <Stock/>
        <img src='running_shoes_PNG5823.png' alt=''/>        
        </SwiperSlide>
      <SwiperSlide className={styles.swiper}>
        <Stock/>
      <img src='running_shoes_PNG5823.png' alt=''/></SwiperSlide>
      <SwiperSlide className={styles.swiper}>
        <Stock/>
      <img src='running_shoes_PNG5823.png' alt=''/></SwiperSlide>
      <SwiperSlide className={styles.swiper}>
        <Stock/>
        <img src='running_shoes_PNG5823.png' alt=''/></SwiperSlide>     
    </Swiper> 
    </>
  );
};




