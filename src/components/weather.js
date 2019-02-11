import React from "react";
import PropTypes from 'prop-types';

const Weather = (props) => {
    return (
        <div className='infoWeath'>
            { props.city && ( // проверяем не пусто ли в пропсах
                <div>
                    <p>Местоположение: {props.city}, {props.country}</p>
                    <p>Температура: {props.temp}</p>
                    <p>Восход солнца: {props.sunrise}</p>
                    <p>Заход солнца: {props.sunset}</p>
                </div>
            )}
            <p className='error'>
                {props.error}
            </p>
        </div>
    )
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
    error: PropTypes.string,
};

export default Weather;