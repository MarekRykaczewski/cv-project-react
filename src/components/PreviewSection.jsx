import React from "react";

export default class PreviewExperience extends React.Component {

    render() {
        return (
            <div className="preview--section">
                <div className="preview--section--title"> {Object.values(this.props.info)[1]} </div>
                <div className="preview--section--job"> {Object.values(this.props.info)[2]} {Object.values(this.props.info)[3]} </div>
                <div className="preview--section--dates"> {Object.values(this.props.info)[4]} - {Object.values(this.props.info)[5]} </div>
            </div>
        )
    }
}