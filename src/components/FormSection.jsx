import React from "react";

export default class FormSection extends React.Component {

    render() {
        const formElements = Object.keys(this.props.info).map((prop, i) => {
            if (!(prop === "id")) {
                if (prop === "photo") {
                    return (
                        <div key={i} className="input-file" >
                        <input id="upload-photo" type="file" name={"prop"} onChange={this.props.handleImageChange} placeholder={prop}></input>
                        <label htmlFor="upload-photo">BROWSE...</label>
                        </div>
                    )
                } else {
                    return (
                        <input type="text" name={prop} onChange={this.props.handleChange} placeholder={prop.toUpperCase()} key={i}></input>
                    )
                }
            } else {
                return false
            }
        })

        return (
            <div className="form-section">
                <h3> {this.props.title.toUpperCase()} </h3>
                {formElements}
                {this.props.allowMultiple && <button onClick={this.props.handleAddClick}> Add </button>}
                {this.props.allowMultiple && this.props.index !== 0 && <button onClick={this.props.handleDeleteClick}> Delete </button>}
            </div>
        )
    }
}