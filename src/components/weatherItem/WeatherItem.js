import React from 'react';
import HttpHelper from '../helper/HttpHelper';
import "./WeatherItem.css";

class WeatherItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: undefined
        };
    }

    componentDidMount() {
        this.getWeather();
    }

    changeWeather = (newWeather) => {
        this.setState({
            weather: newWeather
        });
    }

    changeIsDataValid = (isValid) => {
        this.setState({
            isDataValid: isValid
        });
    }


    renderWeather = (weather) => {
        return (<>
            <div>
                <p>City: {weather.name} (Sealevel: {weather.sea_level}</p>
                <p>Current Temperature: {weather.main.temp}</p>
                <p>Temperature feels like: {weather.main.temp}</p>
                <p>Min. Temperature: {weather.main.temp_min}</p>
                <p>Max. Temperature: {weather.main.temp_max}</p>
                <p>Temperature feels like: {weather.main.humidity}</p>
            </div>
        </>);
    }

    getWeather() {
        let url = 
            "https://api.openweathermap.org/data/2.5/weather?q=" + 
            this.props.city + 
            "&appid=" + this.props.apiKey + 
            "&units=metric";
            
        HttpHelper.makeGetRequest(url)
            .then(data => this.changeWeather(data));
    }

    render() {
        return (<div><ul>
            {this.state.weather !== undefined ? 
            <>
                <div className="city-view-container">
                <p>City: {this.state.weather.name}</p>
                <p>Current Temperature: {this.state.weather.main.temp}°C</p>
                <p>Temperature feels like: {this.state.weather.main.temp}°C</p>
                <p>Min. Temperature: {this.state.weather.main.temp_min}°C</p>
                <p>Max. Temperature: {this.state.weather.main.temp_max}°C</p>
                <p>Humidity: {this.state.weather.main.humidity}%</p>
                </div>
            </>
            :
            <>
                <h1>Loading</h1>
            </>
            }
            
        </ul>
            
        </div>);
    }
}

export default WeatherItem;