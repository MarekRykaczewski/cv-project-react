import React from "react";

export default class Preview extends React.Component {

    render() {
        return (
            <div className="preview">
                <div className="preview--left">
                    <div className="preview--person"> 
                        <div> {this.props.firstName + " " + this.props.lastName}  </div>
                        <div> {this.props.title} </div>
                        <img className="preview--person--image" src={this.props.photo || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} alt="profile" />
                    </div>
                    <div className="preview--personal-info">  
                        <div> Personal Info </div>
                        <div> Phone </div>
                        <div> {this.props.phone} </div>
                        <div> E-mail </div>
                        <div> {this.props.email} </div>
                    </div>
                </div>

                <div className="preview--right">
                    <div className="preview--description">
                        <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio necessitatibus illo voluptatum atque ex! Ab laborum tenetur provident aliquam maxime, adipisci fuga eos nam laboriosam?</div>
                    </div>
                    <div className="preview--experience"> 
                        <div> Experience </div>
                        <div>POSITION</div>
                        <div>COMPANY</div>
                        <div>LOCATION</div>
                        <div> FROM </div>
                        <div> TO</div>
                    </div>
                    <div className="preview--education">
                        <div> Education </div>
                        <div>INSTITUION</div>
                        <div>DEGREE</div>
                        <div>SUBJECT</div>
                        <div> FROM </div>
                        <div> TO</div>
                    </div>
                </div>

            </div>
        )
    }
}