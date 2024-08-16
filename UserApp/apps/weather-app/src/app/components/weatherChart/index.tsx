import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';

interface StockData {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
}

const stockSymbols = ['MSFT', 'AMZN'];

const StockComponent: React.FC = () => {
  const [stocksData, setStocksData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const promises = stockSymbols.map(symbol => 
          axios.get(`https://www.alphavantage.co/query`, {
            params: {
              function: 'GLOBAL_QUOTE',
              symbol,
              apikey: 'XrL58oqZlUCvn8003wz7Jp3pzSqu59AR', // Replace with your API Key
            }
          })
        );

        const results = await Promise.all(promises);
        const data = results.map((response) => {
          const quoteData = response.data['Global Quote'];
          return {
            symbol: quoteData['01. symbol'],
            price: quoteData['05. price'],
            change: quoteData['09. change'],
            changePercent: quoteData['10. change percent'],
          };
        });

        setStocksData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch stock data.');
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) {
    return <div className="stocks-loading">Loading stock data...</div>;
  }

  if (error) {
    return <div className="stocks-error">{error}</div>;
  }

  return (
    <div className="stocks-container">
      <h2>Stock Data</h2>
      <div className="stock-list">
        {stocksData.map(stock => (
          <div key={stock.symbol} className="stock-card">
            <h3>{stock.symbol}</h3>
            <p>Price: ${stock.price}</p>
            <p>Change: {stock.change}</p>
            <p>Change Percent: {stock.changePercent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockComponent;
