import React, { useState, useEffect } from 'react';
import "./Overview.css"
function Overview(props) {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/'+`${props.cryptoKey}`);
        const data = await response.json();
        const coinDetail = data || {};
        setOverview(coinDetail);

      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='PerformanceCard'>
      <h1 className='performance'>Performance (last 24h)</h1>
      <div className='all-div'>
      <div>
        <p>Today's Low</p>
        <p>${overview.market_data?.low_24h?.usd || 'N/A'}</p>
      </div>
      <div className='gradient-line1'></div>
      <div>
        <p>Today's High</p>
        <p>${overview.market_data?.high_24h?.usd || 'N/A'}</p>
      </div>
      </div>
      <div className='all-div'>
      <div>
        <p>Price change</p>
        <p>${Math.floor(overview.market_data?.price_change_24h_in_currency?.usd) || 'N/A'}</p>
      </div>
      <div className='gradient-line2'></div>
      <div>
        <p>Price Change (%)</p>
        <p>${overview.market_data?.price_change_percentage_24h_in_currency.usd || 'N/A'}</p>
      </div>
      </div>
      <div className='Fundamental'>
      <h1 className='fundamental'>Fundamentals</h1>
      <div className="cont">
        <div className="left-cont">
            <div className="incont">
            <p>Bitcoin Price</p>
            <p>${overview.market_data?.current_price.usd || 'N/A'}</p>
            </div>
            <div className="incont">
            <p>24h Low / 24h High</p>
            <p>${overview.market_data?.high_24h.inr || 'N/A'} / ${overview.market_data?.low_24h.inr || 'N/A'}</p>
            </div>
            <div className="incont">
            <p>1h/7d Change </p>
            <p>{overview.market_data?.price_change_percentage_1h_in_currency.usd || 'N/A'}% / {overview.market_data?.price_change_percentage_7d_in_currency.usd || 'N/A'}%</p>
            </div>
            <div className="incont">
            <p>Total Volume</p>
            <p>${overview?.market_data?.total_volume.usd || 'N/A'}</p>
            </div>
            <div className="incont">
            <p>Market Cap Rank</p>
            <p>#{overview?.market_cap_rank || 'N/A'}</p>
            </div>
        </div>
        <div className="right-cont">
        <div className="incont">
            <p>Market Cap</p>
            <p>${overview.market_data?.market_cap.usd || 'N/A'}</p>
            </div>
            <div className="incont">
            <p>Market Cap Change</p>
            <p>${overview.market_data?.market_cap_change_percentage_24h || 'N/A'}%</p>
            </div>
            <div className="incont">
            <p>Market / Volume </p>
            <p>{overview.market_data?.market_cap_fdv_ratio || 'N/A'}</p>
            </div>
            <div className="incont">
            <p>All Time High</p>
            <p>${overview?.market_data?.ath?.usd || 'N/A'}</p>
            </div>
            <div className="incont">
            <p>All Time Low</p>
            <p>${overview?.market_data?.atl?.usd || 'N/A'}</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Overview;

