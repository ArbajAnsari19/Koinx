import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Youmaysec.css"
function Youmaysec() {
  const [topcoins, setTopcoins] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        const imgdata = data.coins || [];
        setTopcoins(imgdata);
        
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);
  return (
    <div className='youmay'>
      <div>   <p className='titleu'>You May Also Like This Section</p>
    <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {topcoins.map((coins)=>(
          <SwiperSlide className='swip'>
            <div className='main-div-car'>
            <img className='img-logo-car' src={coins.item.thumb} alt="" />
            <p>{coins.item.symbol}</p>
            <p className='colr'><i class="ri-arrow-up-s-fill"></i>{Math.floor(coins.item.data.price_change_percentage_24h.usd)}%</p>
            </div>
            <p className='prc-m'>{coins.item.data.price}</p>
            <div>
              <img className='img-spark' src={coins.item.data.sparkline} alt="" />
            </div>
          </SwiperSlide> 
        ))}
          
    </Swiper>
    </div>
    <div>   <p className='titleu'>Trending Coins</p>
    <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {topcoins.map((coins)=>(
          <SwiperSlide className='swip'>
            <div className='main-div-car'>
            <img className='img-logo-car' src={coins.item.thumb} alt="" />
            <p>{coins.item.symbol}</p>
            <p className='colr'><i class="ri-arrow-up-s-fill"></i>{Math.floor(coins.item.data.price_change_percentage_24h.usd)}%</p>
            </div>
            <p className='prc-m'>{coins.item.data.price}</p>
            <div>
              <img className='img-spark' src={coins.item.data.sparkline} alt="" />
            </div>
          </SwiperSlide> 
        ))}
          
    </Swiper></div>
    </div>
  )
}

export default Youmaysec