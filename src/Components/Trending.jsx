import React, { useState, useEffect } from 'react';
import "./Trending.css"

const Trending = () => {
 
  const [top3, setTop3] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        const fetchedCoins = data.coins || [];

        // Check if we haven't reached three coins yet
        if (top3.length < 3) {
          const newTop3Coins = [...top3, ...fetchedCoins.slice(0, 3 - top3.length)];
          setTop3(newTop3Coins);
        }
        
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, [top3]);

  return (
    <div className="trending-coins-card">
       <p className='tp1'>Top Trending (24h)</p>
          {top3.map((coin) => (
          <div className='icoin' key={coin.item.id}>
          <div className='indiv'>
          <img className='trendlogo' src={coin.item.thumb} alt="" />
           <p className='tp2'>{coin.item.name}({coin.item.symbol})</p>
          </div>
           <p className='tp3'>{coin.item.data.price_change_percentage_24h.inr}</p>
    </div>
  ))}
</div>

  );
};

export default Trending;
