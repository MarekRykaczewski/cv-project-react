import React from "react";

export default class General extends React.Component {

    render() {
        const inputElements = Object.keys(this.props.info).map((prop, i) => {
            return (
                <input type="text" placeholder={prop} key={i}></input>
            )
        })

        return (
            <div>
                <h3> Personal Details </h3>
                {inputElements}
            </div>
        )
    }
}