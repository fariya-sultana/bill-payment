import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import slide1 from '../assets/slider-1.png';
import slide2 from '../assets/slider-2.png';
import slide3 from '../assets/slider-3.webp';
import slide6 from '../assets/slider-6.png';
import slide7 from '../assets/electricity1.png';

const Slider = () => {
    return (
        <div className="max-w-7xl mx-auto mt-8 md:mt-12 p-3">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                modules={[Autoplay]}>
                <SwiperSlide>
                    <img src={slide1} alt="Banner 1" className="w-full h-[400px] rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Banner 2" className="w-full h-[400px] rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Banner 3" className="w-full h-[400px] rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="Banner 5" className="w-full h-[400px] rounded-md" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="Banner 5" className="w-full h-[400px] rounded-md" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
