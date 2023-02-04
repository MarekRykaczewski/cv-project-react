import React from "react";

export default class Preview extends React.Component {

    render() {
        return (
            <div className="preview">
                <div className="preview--left">
                    <div className="preview--person"> 
                        <div> YOUR NAME </div>
                        <div> YOUR TITLE </div>
                        <div> PHOTO </div>
                    </div>
                    <div className="preview--personal-info">  
                        <div> Personal Info </div>
                        <div> Phone </div>
                        <div> PHONE NO HERE </div>
                        <div> E-mail </div>
                        <div> EMAIL HERE </div>
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