import React from 'react';
import uniqid from 'uniqid';
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
      id: uniqid(),
      position: "",
      company: "",
      location: "",
      from: "",
      to: ""
    }],
    education: [{
      id: uniqid(),
      institution: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    }]    
}

removeComponentObject = (stateName, id) => {
  let filtered = this.state[stateName].filter(prop => prop.id !== id)
  console.log(filtered)
  this.setState({
    [stateName]:
    filtered
  })
  console.log(this.state)
}

addComponentObject = (stateName) => {
  this.setState({
    [stateName]: 
      [...this.state[stateName], {...this.state[stateName][0]}]
  })
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
        handleDeleteClick={() => this.removeComponentObject(stateName, this.state[stateName][i].id)}
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
