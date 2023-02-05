import React from 'react';
import uniqid from 'uniqid';
import './App.css';
import FormSection from './components/FormSection';
import Preview from './components/Preview';

export default class App extends React.Component {

  STATE_TEMPLATE = {
    general: [{
      id: "0",
      firstName: "",
      lastName: "",
      title: "",
      photo: "",
      email: "",
      phone: "",
      description: ""
    }],
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
    general: [{
      ...this.STATE_TEMPLATE.general[0]
    }],
    experience: [{
      ...this.STATE_TEMPLATE.experience[0], id: uniqid()
    }],
    education: [{
      ...this.STATE_TEMPLATE.education[0], id: uniqid()
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
  console.log(this.state.general[0].firstName)
  this.setState({
  [stateName]:
    updated
  })
}

handleImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    let img = event.target.files[0]
    this.setState({
      general: [
        {...this.state.general[0], photo: URL.createObjectURL(img)}
      ]
    })
  }
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
    const generalDefault = this.state.general[0]
    return (
      <div className="App">
        <nav> CV Maker </nav>
        <main> 
        <div className='main--left'>
        <FormSection 
          title="Personal Details"
          info={this.state.general[0]}
          handleChange={this.handleChange("general", "0")}
          handleImageChange={this.handleImageChange}
          allowMultiple={false}
        />
        {this.renderAll("experience")}
        {this.renderAll("education")}
        </div>
        <Preview 
        general={generalDefault}
        experience={this.state.experience}
        education={this.state.education}
        />
        </main>
        <footer> Marek Rykaczewski </footer>
      </div>
    )
  }
}
