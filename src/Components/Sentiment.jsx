import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Sentiment.css"
import { Pagination, Navigation } from 'swiper/modules';

function Sentiment() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className='Sentiment'>
      <p className='sp'>Sentiments</p>
      <div><p className='spt'>Key Events <i class="ri-information-fill"></i></p>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="swiper-card">
          <i class="ri-file-list-3-line"></i>
          <p className='swiperpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium recusandae deserunt similique consequuntur quas nisi perferendis aperiam deleniti eum ullam quod nihil esse doloribus autem, delectus facere beatae sequi hic.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-card">
          <i class="ri-file-list-3-line"></i>
          <p className='swiperpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium recusandae deserunt similique consequuntur quas nisi perferendis aperiam deleniti eum ullam quod nihil esse doloribus autem, delectus facere beatae sequi hic.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-card">
          <i class="ri-file-list-3-line"></i>
          <p className='swiperpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium recusandae deserunt similique consequuntur quas nisi perferendis aperiam deleniti eum ullam quod nihil esse doloribus autem, delectus facere beatae sequi hic.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-card">
          <i class="ri-file-list-3-line"></i>
          <p className='swiperpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium recusandae deserunt similique consequuntur quas nisi perferendis aperiam deleniti eum ullam quod nihil esse doloribus autem, delectus facere beatae sequi hic.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-card">
          <i class="ri-file-list-3-line"></i>
          <p className='swiperpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium recusandae deserunt similique consequuntur quas nisi perferendis aperiam deleniti eum ullam quod nihil esse doloribus autem, delectus facere beatae sequi hic.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-card">
          <i class="ri-file-list-3-line"></i>
          <p className='swiperpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium recusandae deserunt similique consequuntur quas nisi perferendis aperiam deleniti eum ullam quod nihil esse doloribus autem, delectus facere beatae sequi hic.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-card">
          <i class="ri-file-list-3-line"></i>
          <p className='swiperpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium recusandae deserunt similique consequuntur quas nisi perferendis aperiam deleniti eum ullam quod nihil esse doloribus autem, delectus facere beatae sequi hic.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-card">
          <i class="ri-file-list-3-line"></i>
          <p className='swiperpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium recusandae deserunt similique consequuntur quas nisi perferendis aperiam deleniti eum ullam quod nihil esse doloribus autem, delectus facere beatae sequi hic.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-card">
          <i class="ri-file-list-3-line"></i>
          <p className='swiperpara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium recusandae deserunt similique consequuntur quas nisi perferendis aperiam deleniti eum ullam quod nihil esse doloribus autem, delectus facere beatae sequi hic.</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div>
      <p className='spt'>Analyst Estimates <i class="ri-information-fill"></i></p>
      <div className='side-conti'>
        <div className="circle">
          <p className='circp'>76%</p>
        </div>
        <div className='est'>
          <div className='est1'>
            <p>Buy</p>
          <div className='line-hor1' ></div>
          <p>76%</p>
          </div>
          <div className='est1'>
            <p>Hold</p>
          <div className='line-hor2' ></div>
          <p>8%</p>
          </div>
          <div className='est1'>
            <p>Sell</p>
          <div className='line-hor3' ></div>
          <p>16%</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Sentiment
