import React from "react";

export default class FormSection extends React.Component {

    render() {
        const formElements = Object.keys(this.props.info).map((prop, i) => {
            if (!(prop === "id")) {
                return (
                    <input type="text" name={prop} onChange={this.props.handleChange} placeholder={prop} key={i}></input>
                )
            } else {
                return false
            }
        })

        return (
            <div>
                <h3> {this.props.title} </h3>
                {formElements}
                {this.props.allowMultiple && <button onClick={this.props.handleAddClick}> Add </button>}
                <button onClick={this.props.handleDeleteClick}> Delete </button>
            </div>
        )
    }
}