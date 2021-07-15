import logo from './logo.svg';
import './App.css';
import WeatherItem from './components/weatherItem/WeatherItem';

function App() {
  return (
    <WeatherItem apiKey="<Your-API-Key>" city="london" />
  );
}

export default App;
