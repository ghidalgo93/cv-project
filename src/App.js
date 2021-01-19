import React from "react";
import "./App.css";
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
      // education: [],
      // experience: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(state, value) {
    this.setState({ [state]: value });
  }

  render() {
    const { name, email, phone, website, github } = this.state;
    return (
      <div className="App">
        <CvBuilder
          name={name}
          email={email}
          phone={phone}
          website={website}
          github={github}
          onInputChange={this.handleChange}
        />
        <CvViewer
          name={name}
          email={email}
          phone={phone}
          website={website}
          github={github}
        />
      </div>
    );
  }
}

export default App;
