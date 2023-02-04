import React from "react";
import PreviewSection from './PreviewSection'

export default class Preview extends React.Component {

    renderAllSections = (propName) => {
        let elements = []
        for (let i = 0; i < this.props[propName].length; i++) {
                elements.push(
                    <PreviewSection
                      key={i}
                      info={this.props[propName][i]}
                  />
                  )
        }
        return elements
      }

    render() {
        const general = this.props.general
        return (
            <div className="preview">
                <div className="preview--left">
                    <div className="preview--person"> 
                        <div> {general.firstName || "FIRSTNAME"} {general.lastName || "LASTNAME"} </div>
                        <div> {general.title} </div>
                        <img className="preview--person--image" src={general.photo || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} alt="profile" />
                    </div>
                    <div className="preview--personal-info">  
                        <div> Personal Info </div>
                        <div> Phone </div>
                        <div> {general.phone || "PHONE-NUMBER"} </div>
                        <div> E-mail </div>
                        <div> {general.email || "E-MAIL"} </div>
                    </div>
                </div>

                <div className="preview--right">
                    <div className="preview--description"> {general.description || "DESCRIPTION"} </div>
                    <div className="preview--experience"> 
                        {this.renderAllSections("experience")}
                    </div>
                    <div className="preview--education">
                        {this.renderAllSections("education")}
                    </div>
                </div>

            </div>
        )
    }
}