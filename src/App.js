// Импортируем библиотеку React
import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "efac62f8f1224430f1db691d407df751";

// Создаем компонент
// App - назввание компонента (может быть любое название)
// extends - унаследует что-либо из другого класса
// React.Component - от сюда происходит наследование
class App extends React.Component {

    // переменные, которые будут сюда попадать после запроса и храниться (их можно передавать в другие компоненты)
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        // preventDefault - отмена стандартного поведения
        e.preventDefault();
        const city = e.target.elements.city.value;

        if(city) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            console.log('%cГород: '+data.name, 'font-size:30px;'); // обьект data

            var sunset = data.sys.sunset;
            var date = new Date();
            date.setTime(sunset);
            var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: data.sys.sunrise,
                sunset: sunset_date,
                error: ""
    
            });
        }
    }

    // чтобы что-либо выводить на экран, нужно прописать - render(){}
    // а внутри return
    render() {
        return(
            <div>
                <Info />

                {/* Передаем переменную weatherMethod в компонент Form */}
                {/* this - обращаемся к этому класу App */}
                {/* gettingWeather - берем этот метод */}
                <Form weatherMethod={this.gettingWeather} />

                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
            </div>
        );
    }
}

// Чтобы где-либо подключить этот компонент, нужно его експортировать
export default App;