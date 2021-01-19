import React from "react";
import "./Form.css";

class FormEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      studyName: "",
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
    this.props.onFormSubmit("education", this.state);
    this.props.onClose();
  }

  render() {
    return (
      <form className="FormEducation">
        <input
          type="text"
          value={this.state.schoolName}
          placeholder="School Name"
          onChange={(e) => this.handleChange("schoolName", e)}
        />
        <input
          type="text"
          value={this.state.studyName}
          placeholder="Title of Study"
          onChange={(e) => this.handleChange("studyName", e)}
        />
        <div className="date">
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
        <i
          type="submit"
          onClick={this.handleFormSubmit}
          className="fas fa-check-square"
        ></i>
        <i onClick={this.handleClose} className="fas fa-window-close"></i>
      </form>
    );
  }
}

export default FormEducation;
