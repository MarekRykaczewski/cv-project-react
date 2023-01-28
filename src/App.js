import React from 'react';
import './App.css';
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
        </main>
        <footer> Marek Rykaczewski </footer>
      </div>
    )
  }
}
