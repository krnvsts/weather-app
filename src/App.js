// импортируем библиотеку React
import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "259d254a455298079401415ab56effc2";

// Создаем компонент
// App - назввание компонента (может быть любое название)
// extends - унаследует что-либо из другого класса
// React.Component - от сюда происходит наследование
class App extends React.Component {

    gettingWeather = async () => {
        const api_url = await fetch(`api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);
    }

    // чтобы что-либо выводить на экран, нужно прописать - render(){}
    // а внутри return
    render() {
        return(
            <div>
                <Info />
                <Form />
                <Weather />
            </div>
        );
    }
}

// Чтобы где-либо подключить этот компонент, нужно его експортировать
export default App;