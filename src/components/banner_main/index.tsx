'use client'
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const BannerSlider = () => {
    SwiperCore.use([Pagination, Navigation]);

    const [isMobile, setIsMobile] = useState(false);

    // ตรวจสอบขนาดหน้าจอ
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // ถ้าจอ < 768px ถือว่าเป็น mobile
        };

        handleResize(); // เรียกใช้ครั้งแรก
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const banner = [
        {
            name: "1",
            url: "",
            mobile: { image: "/img/banner/mobile/Banner-Move-RC15-2023-s.jpg" },
            pc: { image: "/img/banner/pc/Banner_Lead_Promotion_Mobile.jpg" }
        },
        {
            name: "2",
            url: "",
            mobile: { image: "/img/banner/mobile/News-Move-RC-BangKae-20231027.jpg" },
            pc: { image: "/img/banner/pc/news-opening-june1-header.jpg" }
        },
        {
            name: "3",
            url: "",
            mobile: { image: "/img/banner/mobile/RC-News-ReOpen2023-Bangkapi-s.jpg" },
            pc: { image: "/img/banner/pc/treatments-cat-1m.jpg" }
        },
    ];

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation
        >
            {banner.map((item, index) => (
                <SwiperSlide key={index}>
                    <a href={item.url}>
                        <img
                            src={isMobile ? item.mobile.image : item.pc.image}
                            alt={item.name}
                            className="w-full h-auto"
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default BannerSlider;
