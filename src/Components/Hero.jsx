import React, { useEffect, useRef, memo } from 'react';

function Hero() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
              updateContainerStyles();
              window.addEventListener('resize', updateContainerStyles);
            }
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|ALL"
            ],
            [
              "BITSTAMP:ETHUSD|ALL"
            ]
          ],
          "chartOnly": false,
          "width": 550,
          "height": 400,
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "line",
          "maLineColor": "#0052fe",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 3,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      container.current.innerHTML = "";
      container.current.appendChild(script);
      return () => {
              window.removeEventListener('resize', updateContainerStyles);
            };
          }, []);
          const updateContainerStyles = () => {
                // Get the current screen width
                const screenWidth = window.innerWidth;
            
                // Set different values based on screen width
                if (screenWidth < 600) {

                  container.current.style.marginLeft = "10px";
                  container.current.style.height = "60vh";
                  container.current.style.width = "90vw";
                } else {
                  container.current.style.marginLeft = "30px";
                  container.current.style.height = "80vh";
                  container.current.style.width = "60vw";
                  container.current.style.borderRadius = '100px';
                  
                }
              };
  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default Hero;