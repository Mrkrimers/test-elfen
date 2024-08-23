import style from "../Blog/style.module.scss"
import 'swiper/scss';

import "./style.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";

import articleOne from './assets/article1.png'
import articleTwo from './assets/article2.png'
import articleThree from './assets/article3.png'

export default function Blog() {
    const [slideRange, setSlideRange] = useState("");

    const updateSlideRange = (swiper) => {
        const start = swiper.activeIndex + 1;
        const end = start + 2;
        setSlideRange(`${start}-${end}`);
    };

    return (
        <section className={style.sectionBlog}>
            <div className={style.title}>
                <h1>блог</h1>
                <p>{slideRange}</p>
            </div>

            <div className={style.swiperWrapper}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    onSlideChange={(swiper) => updateSlideRange(swiper)}
                    onSwiper={(swiper) => updateSlideRange(swiper)}
                    className="my-swiper"
                >

                    <SwiperSlide><div className={style.imgContainer}>
                        <img src={articleOne} alt="articleOne" />
                    </div></SwiperSlide>

                    <SwiperSlide><div className={style.imgContainer}>
                        <img src={articleTwo} alt="articleTwo" />
                    </div></SwiperSlide>

                    <SwiperSlide><div className={style.imgContainer}>
                        <img src={articleThree} alt="articleThree" />
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.imgContainer}>
                        <img src={articleOne} alt="articleOne" />
                    </div></SwiperSlide>

                    <SwiperSlide><div className={style.imgContainer}>
                        <img src={articleTwo} alt="articleTwo" />
                    </div></SwiperSlide>

                    <SwiperSlide><div className={style.imgContainer}>
                        <img src={articleThree} alt="articleThree" />
                    </div></SwiperSlide>
                    <SwiperSlide><div className={style.imgContainer}>
                        <img src={articleOne} alt="articleOne" />
                    </div></SwiperSlide>

                    <SwiperSlide><div className={style.imgContainer}>
                        <img src={articleTwo} alt="articleTwo" />
                    </div></SwiperSlide>

                    <SwiperSlide><div className={style.imgContainer}>
                        <img src={articleThree} alt="articleThree" />
                    </div></SwiperSlide>

                </Swiper>
            </div>


        </section >
    )
}
