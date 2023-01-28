import React from 'react';
import './App.css';
import Experience from './components/Experience';
import General from './components/General.jsx'

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
    experience: {
      position: "",
      company: "",
      location: "",
      from: "",
      to: ""
    }
}

  render() {
    return (
      <div className="App">
        <nav> CV Maker </nav>
        <main> 
        <General 
          info={this.state.general}
        />
        <Experience
          info={this.state.experience}
        />
        </main>
        <footer> Marek Rykaczewski </footer>
      </div>
    )
  }
}
