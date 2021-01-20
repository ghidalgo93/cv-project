import React from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import CvBuilder from "./components/CvBuilder";
import CvViewer from "./components/CvViewer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      website: "",
      github: "",
      education: [],
      experience: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(state, value) {
    this.setState({ [state]: value });
  }
  handleFormSubmit(state, valuesObj) {
    const obj = { values: valuesObj, id: uniqid() };
    this.setState({
      [state]: this.state[state].concat(obj),
    });
  }
  handleDelete(state, id) {
    this.setState({
      [state]: this.state[state].filter((i) => {
        return i.id !== id;
      }),
    });
  }

  render() {
    const {
      name,
      email,
      phone,
      website,
      github,
      education,
      experience,
    } = this.state;
    return (
      <div className="App">
        <CvBuilder
          name={name}
          email={email}
          phone={phone}
          website={website}
          github={github}
          education={education}
          experience={experience}
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <CvViewer
          name={name}
          email={email}
          phone={phone}
          website={website}
          github={github}
          education={education}
          experience={experience}
          onDelete={this.handleDelete}
          onInputChange={this.handleInputChange}
          onFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default App;
