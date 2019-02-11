import React from "react";
// import { format } from "url";

const Form = (props) => {
    return (
        // props - вытаскиваем свойство, которые передаются в данный компонент
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="Город" />
            <button>Получить погоду</button>
        </form>
    );
}

export default Form;