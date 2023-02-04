import React from "react";

export default class PreviewExperience extends React.Component {

    render() {
        return (
            <div>
                <div> {Object.values(this.props.info)[1]} </div>
                <div> {Object.values(this.props.info)[2]} </div>
                <div> {Object.values(this.props.info)[3]} </div>
                <div> {Object.values(this.props.info)[4]} </div>
                <div> {Object.values(this.props.info)[5]} </div>
            </div>
        )
    }
}