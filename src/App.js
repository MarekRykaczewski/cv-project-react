import React from 'react';
import './App.css';
import FormSection from './components/FormSection';

export default class App extends React.Component {

  state = {
    general: {
      firstName: "",
      lastName: "",
      title: "",
      photo: "",
      email: "",
      phone: "",
      description: ""
    },
    experience: [{
      position: "",
      company: "",
      location: "",
      from: "",
      to: ""
    }],
    education: [{
      institution: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    }]    
}

  render() {
    return (
      <div className="App">
        <nav> CV Maker </nav>
        <main> 
        <FormSection 
          title="Personal Details"
          info={this.state.general}
        />
        <FormSection 
          title="Experience"
          info={this.state.experience[0]}
          allowMultiple={true}
        />
        <FormSection 
          title="Education"
          info={this.state.education[0]}
          allowMultiple={true}
        />
        </main>
        <footer> Marek Rykaczewski </footer>
      </div>
    )
  }
}
