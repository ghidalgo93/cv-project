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
      education: [],
      experience: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(state, value) {
    if (state === "name") this.setState({ name: value });
    else if (state === "email") this.setState({ email: value });
  }

  render() {
    const { name, email } = this.state;

    return (
      <div className="App">
        <CvBuilder
          name={name}
          email={email}
          onInputChange={this.handleChange}
        />
        <CvViewer name={name} email={email} />
      </div>
    );
  }
}

export default App;
