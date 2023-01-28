import React from "react";

export default class Experience extends React.Component {

    render() {
        const experienceElements = Object.keys(this.props.info).map((prop, i) => {
            return (
                <input type="text" placeholder={prop} key={i}></input>
            )
        })

        return (
            <div>
                <h3> Experience </h3>
                {experienceElements}
            </div>
        )
    }
}