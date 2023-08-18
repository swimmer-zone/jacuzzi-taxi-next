import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import '../assets/components/carousel.scss';

// https://swiperjs.com/react

const CarouselComponent = () => {
	return (<Swiper
		autoplay={{
			delay: 2500,
			disableOnInteraction: false,
		}}
		slidesPerView={3}
		spaceBetween={80}
		pagination={{
			clickable: true,
		}}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
		className="mySwiper">
		<SwiperSlide><img src="/scent.jpg"/></SwiperSlide>
		<SwiperSlide><img src="/barbecue.webp"/></SwiperSlide>
		<SwiperSlide><img src="/parasol.jpg"/></SwiperSlide>
		<SwiperSlide><img src="/candles.jpg"/></SwiperSlide>
		<SwiperSlide><img src="/party.jpg"/></SwiperSlide>
		<SwiperSlide><img src="/home.jpg"/></SwiperSlide>
	</Swiper>);
}

export default CarouselComponent;
