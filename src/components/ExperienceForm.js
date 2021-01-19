import React from "react";
import "./Form.css";

class FormExperience extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <form className="FormEducation">
        <input type="text" placeholder="Company Name" />
        <input type="text" placeholder="Position Title" />
        <input type="text" placeholder="Main Tasks" />
        <div className="date">
          <label>
            From:
            <input type="date" />
          </label>
          <label>
            To:
            <input type="date" />
          </label>
        </div>
        <i className="fas fa-check-square"></i>
        <i onClick={this.handleClose} className="fas fa-window-close"></i>
      </form>
    );
  }
}

export default FormExperience;
