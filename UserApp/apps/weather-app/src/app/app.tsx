// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import WeatherChart from './components/weatherChart';

export function App() {
  return (
    <div>
        <h2>Weather Forecast</h2>
        <WeatherChart />
    </div>
  );
}

export default App;
