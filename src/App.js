import React from 'react';
import uniqid from 'uniqid';
import './App.css';
import FormSection from './components/FormSection';

export default class App extends React.Component {

  STATE_TEMPLATE = {
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
      id: "",
      position: "",
      company: "",
      location: "",
      from: "",
      to: ""
    }],
    education: [{
      id: "",
      institution: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    }]   
  }

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
  this.setState({
    [stateName]:
    filtered
  })
  console.log(this.state)
}

addComponentObject = (stateName) => {
  this.setState({
    [stateName]: 
      [...this.state[stateName], {...this.STATE_TEMPLATE[stateName][0], id: uniqid()}]
  })
}

handleChange = (stateName, id) => (event) => {
  const { name, value } = event.target
  let updated = this.state[stateName].map(item => {
    if (item.id === id) {
      return {...item, [name]: value};
    }
    return item
  })
  console.log(this.state)
  this.setState({
  [stateName]:
    updated
  })
}

renderAll = (stateName) => {
  let elements = []
  for (let i = 0; i < this.state[stateName].length ; i++) {
      elements.push(
        <FormSection
        key={this.state[stateName][i].id} // !!! This lets props update on state change !!!
        title={stateName}
        info={this.state[stateName][i]}
        allowMultiple={true}
        handleAddClick={() => this.addComponentObject(stateName)}
        handleDeleteClick={() => this.removeComponentObject(stateName, this.state[stateName][i].id)}
        handleChange={this.handleChange(stateName, this.state[stateName][i].id)}
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
