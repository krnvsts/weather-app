import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && // проверяем не пусто ли в пропсах
                    <div>
                        <p>Местоположение: {this.props.city}, {this.props.country}</p>
                        <p>Температура: {this.props.temp}</p>
                        <p>Восход солнца: {this.props.sunrise}</p>
                        <p>Заход солнца: {this.props.sunset}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Weather;