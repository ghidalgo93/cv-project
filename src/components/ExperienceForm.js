import React from "react";
import "../styles/App.css";

class FormExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coName: "",
      positionTitle: "",
      mainTasks: "",
      startDate: "",
      endDate: "",
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }
  handleChange(state, e) {
    this.setState({ [state]: e.target.value });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit("experience", this.state);
    this.props.onClose();
  }

  render() {
    return (
      <form className="column">
        <input
          type="text"
          placeholder="Company Name"
          value={this.state.coName}
          onChange={(e) => this.handleChange("coName", e)}
        />
        <input
          type="text"
          placeholder="Position Title"
          value={this.state.positionTitle}
          onChange={(e) => this.handleChange("positionTitle", e)}
        />
        <input
          type="text"
          placeholder="Main Tasks"
          value={this.state.mainTasks}
          onChange={(e) => this.handleChange("mainTasks", e)}
        />
        <div>
          From:{" "}
          <input
            type="date"
            onChange={(e) => this.handleChange("startDate", e)}
          />
          To:{" "}
          <input
            type="date"
            onChange={(e) => this.handleChange("endDate", e)}
          />
        </div>
        <div>
          <i
            type="submit"
            onClick={this.handleFormSubmit}
            className="fas fa-check-square add"
          ></i>
          <i
            onClick={this.handleClose}
            className="fas fa-window-close cancel"
          ></i>
        </div>
      </form>
    );
  }
}

export default FormExperience;
