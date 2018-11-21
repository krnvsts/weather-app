import React from "react";
// import { format } from "url";

class Form extends React.Component {
    render() {
        return (
            // props - вытаскиваем свойство, которые передаются в данный компонент
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город" />
                <button>Получить погоду</button>
            </form>
        );
    }
}

export default Form;