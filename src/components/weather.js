import React from "react";
import PropTypes from 'prop-types';

class Weather extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && ( // проверяем не пусто ли в пропсах
                    <div>
                        <p>Местоположение: {this.props.city}, {this.props.country}</p>
                        <p>Температура: {this.props.temp}</p>
                        <p>Восход солнца: {this.props.sunrise}</p>
                        <p>Заход солнца: {this.props.sunset}</p>
                    </div>
                )}
            </div>
        );
    }
}


/* ---------- propTypes ----------
    propTypes снизу можно и не писать
    В процессе разработки, если какому-то компоненту
    не будет передано нужное свойство или свойство 
    иного типа, React создаст лог ошибки.
    Плюс сразу видно, какие пропсы передаются компоненту.
*/
Weather.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
    temp: PropTypes.number,
    sunrise: PropTypes.number,
    sunset: PropTypes.string,
};

export default Weather;