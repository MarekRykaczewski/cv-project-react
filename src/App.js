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

addComponentObject = (stateName) => {
  this.setState({
    [stateName]: 
      [...this.state[stateName], {...this.state[stateName][0]}]
  })
  console.log(this.state)
}

renderAll = (stateName) => {
  let elements = []
  for (let i = 0; i < this.state[stateName].length ; i++) {
      elements.push(
        <FormSection
        title={stateName}
        info={this.state[stateName][i]}
        allowMultiple={true}
        handleAddClick={() => this.addComponentObject(stateName)}
      />
      )
  }
  return elements
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
        {this.renderAll("experience")}
        {this.renderAll("education")}
        </main>
        <footer> Marek Rykaczewski </footer>
      </div>
    )
  }
}
